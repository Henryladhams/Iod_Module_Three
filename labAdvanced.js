//----
function makeCounter() {
  let currentCount = 0;
  return function () {
    currentCount++;
    console.log(currentCount);
    return currentCount;
  };
}

function makeCounterC(startFrom, incrementBy) {}
let counter1 = makeCounter();
counter1(); // 1
counter2();
counter1(); // 2

//e

const delayMsg = (msg) => {
  console.log(`This message will be printed after a delay: ${msg}`);
};

setTimeout(delayMsg, 100, "#1: Delayed by 100ms");
setTimeout(delayMsg, 20, "#2: Delayed by 20ms");
setTimeout(delayMsg, 0, "#3: Delayed by 0ms");
delayMsg("#4: Not delayed at all");

const cancelMsg = setTimeOut(delayMsg, 200, "#1: Delayed by 200ms");

clearTimeOur(cancelMsg);

//e

function printMe() {
  console.log("printing debounced message");
}
printMe = debounce(printMe); //create this debounce function for a)
//fire off 3 calls to printMe within 300ms - only the LAST one should print, after
//1000ms of no calls

setTimeout(printMe, 100);
setTimeout(printMe, 200);
setTimeout(printMe, 300);

function debounce(func) {
  let timeout;

  return function () {
    clearTimeout(Timeout);
    timeout = setTimeout(func, 1000);
  };
}

////xe

//CLOCK

class DigitalClock {
  constructor(prefix) {
    this.prefix = prefix;
  }
  display() {
    let date = new Date();
    //create 3 variables in one go using array destructuring
    let [hours, mins, secs] = [
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
    ];

    if (hours < 10) hours = "0" + hours;
    if (mins < 10) mins = "0" + mins;
    if (secs < 10) secs = "0" + secs;
    console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
  }
  stop() {}
  start() {
    this.display();
    this.timer = setInterval(() => this.display(), 1000);
  }
}
const myClock = new DigitalClock("my clock:");
myClock.start();

clearInterval(this.timer);
myClock.start();

class PrecisionClock extends DigitalClock {
  constructuor(prefix, precision) {
    super(prefix);
    this.precision = precision ? precision : 1000;
  }
  start() {
    this.display();
    this.timer = setInterval(() => this.display(), this.precision);
  }
}

6;

const myPrecisionClock = new PrecisionClock("my precision clock:", 2000);
myPrecisionClock.start();

class AlarmClock extends DigitalClock {
  constructor(prefix, wakeupTime = "07:00") {
    super(prefix);
    this.wakeupTime = wakeupTime;
  }
}

///////e

function orderItems(...items) {
  return `Order placed for: ${items.join(", ")}`;
}

// a) decorator function to validate argument as string
function validateStringArg(fn) {
  return function (arg) {
    if (typeof arg !== "string") {
      throw new Error("Argument must be a string");
    }

    return fn(arg);
  };
}

// APPLY VERSION
// function validateStringArgs(fn) {
//   return function (args) {
//     // dynamic list of arguments/params

//     for (let singleArg of arguments) {
//       if (typeof singleArg !== "string") {
//         throw new Error(`Argument ${singleArg} must be a string`);
//       }
//     }

//     return fn.apply(this, arguments);
//   };
// }

function validateStringArgs(func) {
  return function (...args) {
    for (let arg of args) {
      if (typeof arg === "string") {
        return func(...args);
      }
      throw new Error("Please input a string");
    }
  };
}

const validatedOrderItems = validateStringArgs(orderItems);

try {
  console.log(validatedOrderItems("Apple Watch", "Airpods")); // should run the function
} catch (err) {
  console.log("Error returned", err.message);
}

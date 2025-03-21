const getTitles = (authorInitial, library) => {
  if (authorInitial && library.length) {
    const test = "test";
    test.toLowerCase();
    // return library.filter((book) => book.author[0] === authorInitial);
    return library
      .filter((book) =>
        book.author.toLowerCase().startsWith(authorInitial.toLowerCase())
      )
      .map((book) => {
        return book.title;
      });
  }

  return [];
};

//  console.log("getTitles", getTitles("F", books));

//e
const latestBook = () => {};

///// e

const phoneBookABC = new Map(); //an empty map to begin with
phoneBookABC.set("Annabelle", "0412312343");
phoneBookABC.set("Barry", "0433221117");
phoneBookABC.set("Caroline", "0455221182");

const phoneBookDEF = new Map([
  ["Dennis", "0435492744"],
  ["Ethan", "0489634887"],
  ["Finn", "0433214276"],
]);

phoneBookABC.set("Caroline", "0467884574");

console.log(phoneBookABC.values());

function printPhoneBook(contacts) {
  contacts.forEach((value, key) => {
    console.log("Name: " + key, "Mobile Number: " + value);
  });
}

printPhoneBook(phoneBookABC);

const combinedPhoneBook = new Map(
  // [...phoneBookABC.entries()].concat([...phoneBookDEF.entries()], [...phoneBookGTH.entries()])
  [...phoneBookABC, ...phoneBookGTH]
);

printPhoneBook(phoneBookABC);
console.log([...combinedPhoneBook.keys()]);
// console.Log

///// e

let salaries = {
  Timothy: 35000,
  David: 25000,
  Mary: 55000,
  Christina: 75000,
  James: 43000,
};

console.log(
  "b - salaries",
  Object.values(salaries),
  Object.keys(salaries)[0][0]
);

function topEarner(salaries) {
  let topSalary = 0;
  let topEarner = "";
  //for...in loop to access object properties
  for (let name in salaries) {
    if (salaries[name] > topSalary) {
      topSalary = salaries[name];
      topEarner = name;
    }
  }
  return topEarner;
}
console.log(topSalary(salaries) + " earns the most");

// e

const today = new Date(); //2025-02-15

// HOW DO I GET TODAYS TIME STAMP

const now = new Date(); //2025-02-15

// I WANT TO ADD 1 HOUR TO WHAT EVER IS THAT IS AND PRINT

const updatedTime = new Date(now.setHours(now.getHours() + 1));
console.log(updatedTime.toLocaleTimeString());

// I WANT TO ADD ANOTHER 1 HOUR AND 30 MIN AND PRINT

const updatedMinutes = new Date(
  now.setMinutes(now.getMinutes() + 60 + 30) // hour + min in min
).toLocalTimeString();

console.log("updated minutes", updatedMinutes);

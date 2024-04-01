let passportMarried = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "Bobryisk"
    }
};

let { name,
    surname,
    address: {
        country,
        city
    } } = passportMarried;

let passportMarried2 = {
    name,
    surname,
    married: true,
    address: {
        country,
        city
    }
};

console.log(passportMarried);
console.log(passportMarried2);

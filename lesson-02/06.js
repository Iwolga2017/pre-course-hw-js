let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};

let {name, surname, address: {country, city}} = passportWithAddress;
let passportWithAddress2 = {name, surname, address: {country, city}};
passportWithAddress2.address.city = 'Bobryisk';

console.log(passportWithAddress);
console.log(passportWithAddress2);



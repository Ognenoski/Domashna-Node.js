const fs = require('fs');

fs.writeFile("domashna.txt", "Ova e Domashna 3", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Uspesno kreirana domashna.txt");
    }
});



const local = require('./local');
local();


const module3 = require("randomcolor");
const color = module3();
console.log(color);

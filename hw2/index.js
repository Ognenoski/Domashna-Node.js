const studenti = [
    { ime: "Bojan", prosek: 7.5, grad: "Skopje" },
    { ime: "Pero", prosek: 8.3, grad: "Bitola" },
    { ime: "Janko", prosek: 6.9, grad: "Bitola" },
    { ime: "Vesna", prosek: 9.2, grad: "Skopje" },
    { ime: "Elena", prosek: 9.9, grad: "Kumanovo" },
    { ime: "Vancho", prosek: 10, grad: "Tetovo" },
    { ime: "Elena", prosek: 9.9, grad: "Ohrid" },
    { ime: "Ivana", prosek: 6.9, grad: "Kumanovo" },
    { ime: "Natasha", prosek: 8.1, grad: "Skopje" },
    { ime: "Stanko", prosek: 7.2, grad: "Strumica" },
];

// Zadaca br. 1 Site studenti od Skopje cie ime zavrsuva na bukvata a i imaat prosek nad 7, podredeni po ime(rastecki-ascending)

const zadaca1 = studenti.filter(student =>
    student.grad === "Skopje" &&
    student.ime.endsWith("a") &&
    student.prosek > 7)
    .sort((a, b) => a.ime.localeCompare(b.ime));

console.log(zadaca1);

// Zadaca br. 2  Site studenti koi imaat prosek nad 9, ne se od Skopje, podredeni po prosek, no opagacki (descending)
const zadaca2 = studenti.filter(student =>
    student.prosek > 9 &&
    student.grad !== "Skopje")
    .sort((a, b) => b.prosek - a.prosek);

console.log(zadaca2);

// Zadaca br. 3 Prvite 3 studenti koi immat iminja od 5 karakteri(bukvi), podredeni po prosek.

const zadaca3 = studenti.filter(student =>
    student.ime.length === 5)
    .slice(0, 3)
    .sort((a, b) => a.prosek - b.prosek)

console.log(zadaca3);

// Zadaca br. 4 Gradovite podredeni spored grupnata visina na prosekot na studentite od niv.

const zadaca4 = studenti.reduce((gradovi, student) => {

    let grad = gradovi.find(g => g.grad === student.grad);

    if (grad) {
        grad.zbir += student.prosek;
        grad.broj++;
    } else {
        gradovi.push({
            grad: student.grad,
            zbir: student.prosek,
            broj: 1
        });
    }
    return gradovi;

}, []);

zadaca4.forEach(grad => {
    grad.prosek = grad.zbir / grad.broj;
    delete grad.zbir;
    delete grad.broj;
});

zadaca4.sort((a, b) => a.prosek - b.prosek);

console.log(zadaca4);

// Zadaca br. 5 Vkupen prosek na studenti ciesto ime zavrsuva na bukvata a, 
// i posle toa isto taka na site ostanati

const studentiSoA = studenti.filter(student =>
    student.ime.endsWith("a"));

const ostanatiStudenti = studenti.filter(student =>
    !student.ime.endsWith("a"));

const prosekSoA = studentiSoA.reduce((zbir, student) => {
    return zbir + student.prosek;
}, 0) / studentiSoA.length;

const prosekOstanati = ostanatiStudenti.reduce((zbir, student) => {
    return zbir + student.prosek;
}, 0) / ostanatiStudenti.length;

console.log("Prosek na studenti so A:", prosekSoA);
console.log("Prosek na ostanatite studenti:", prosekOstanati);
const express = require('express');

const app = express();

const data = {
    cars: ['Audi', 'BMW', 'Mercedes', 'Toyota', 'Honda'],
}
// 1. Home - display data for cars
app.get('/home/cars', (req, res) => {

    const { query } = req.query;
    const carId = parseInt(query);

    if (query === undefined) {
        return res.send('<h1>Dostapni avtomobili</h1><p>' + data.cars.join(' | ') + '</p>');
    }


    // 2. Cars - route with query (Hint: req.query) display single car

    if (carId >= 0 && carId < data.cars.length) {
        res.send(data.cars[carId]);
    } else {
        res.status(404).send("Avtomobilot ne e pronajden.");
    }
});
    // 3. Fetch data from https://jsonplaceholder.typicode.com/users
    // 4. Display users from this API (just the names)
app.get('/users', async (req, res) => {

    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const users = await response.json();

    const names = users.map(user => user.name);

    res.send(
        '<h1>Lista na korisnici</h1><p>' +
        names.join(" | ") +
        '</p>'
    );
});

app.listen(8000);
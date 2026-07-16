const express = require('express');
const analysisController = require('./controllers/analysisController');

const app = express();

app.set('view engine', 'ejs');


app.use(express.urlencoded({ extended: false }));


app.get('/analiza', analysisController.getAnalysis);


app.post('/analiza', analysisController.postAnalysis);

app.listen(3000, () => {
    console.log('Serverot e startuvan na http://localhost:3000/analiza');
});
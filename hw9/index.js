//MVC pattern
//Model 
//View
//Controller

// Na ovoj cas ke napravime aplikacija za dodavanje i brisenje studenti so ime, prezime, prosek
// Arhitektura na aplikacijata:
// -> Frontend-UI (Kaj nas toa ke bide views folderot views(html ili ejs)) ->
// -> Router (Kaj nas na ovoj cas nema da ima potreba za toa bidejki ke se malku ruti, nema da ima poseben router folder, site ruti ke gi stavime vo index.js) ->
// -> Controller (tuka ni e programerskata logika, odnosno handler) ->
// -> Model (Kako ke ni izgleda entitetot(student) i CRUD operaciite za istiot)->
// -> databaza (Kaj nas toa ke bide fajlot students.json)

const express = require("express");

const {
    getForm,
    postForm,
    getStudents,
    getDelete,
    getEdit,
    postEdit
} = require("./controllers/formular");

const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true })); //body-parser
// It is used when we have req.body => POST, PUT, PATCH, DELETE
// When extended is TRUE req.body can be any type (string, object, array, number, boolean, undefined, null)
// When extended is FALSE req.body can be only string or array
app.use(express.static("public")); // You will understand this more when you get to React.js
// static assets reffer to files that are served to the client without any modification by the server
// public folder contains data that the server will not process

app.get("/form", getForm);
app.post("/form", postForm);
app.get("/students", getStudents);
app.get("/delete", getDelete);
app.get("/edit", getEdit);
app.post("/edit", postEdit);

app.listen(8000, (err) => {
    if (err) console.log(err);
    console.log("Server started at port: 8000");
});


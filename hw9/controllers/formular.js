const { list, add, remove, update,getOne } = require("../models/student");

const getForm = (req, res) => {
    res.render("formular");
};

const postForm = async (req, res) => {
    let studentData = {
        ime: req.body.ime,
        prezime: req.body.prezime,
        prosek: req.body.prosek
    };
    await add(studentData);
    res.redirect("/students"); // will navigate the client(user) to /students
    // by default the user will be sent to the GET method page of /students
};

const getStudents = async(req, res) => {
    let data = await list();
    res.render("students", { data });
};

const getDelete = async (req, res) => {
    console.log("req query", req.query);
    await remove(req.query.studentIndex); //how will we name the variable in the ejs file
    res.redirect("/students");
};
const getEdit = async (req, res) => {
    const index = req.query.studentIndex;

    const student = await getOne(index);

    res.render("edit", {
        student,
        index
    });
};
const postEdit = async (req, res) => {

    const index = req.body.index;

    const studentData = {
        ime: req.body.ime,
        prezime: req.body.prezime,
        prosek: req.body.prosek
    };

    await update(index, studentData);

    res.redirect("/students");
};

module.exports = {
    getForm,
    postForm,
    getStudents,
    getDelete,
    getEdit,
    postEdit
}
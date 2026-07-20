const groceryModel = require("../models/groceryModel");

const getAdd = async (req, res) => {
    res.render("add");
};

const postAdd = async (req, res) => {
    await groceryModel.add(req.body);
    res.redirect("/groceries/list");
};

const getGroceries = async (req, res) => {
    const data = await groceryModel.list();

    res.render("groceries", { data });
};

const deleteGrocery = async (req, res) => {
    const { index } = req.query;

    await groceryModel.remove(index);

    res.redirect("/groceries/list");
};

const getEdit = async (req, res) => {
    const { index } = req.query;

    const item = await groceryModel.getOne(index);

    res.render("edit", { item, index });
};

const postEdit = async (req, res) => {
    const { index } = req.query;

    await groceryModel.update(index, req.body);

    res.redirect("/groceries/list");
};

module.exports = {
    getAdd,
    postAdd,
    getGroceries,
    deleteGrocery,
    getEdit,
    postEdit,
};
const fs = require("fs");

const DATA_SOURCE = `${__dirname}/../groceries.json`;

const readFile = async () => {
    return new Promise((success, fail) => {
        fs.readFile(DATA_SOURCE, "utf-8", (err, data) => {
            if (err) {
                return fail(err);
            }

            return success(data);
        });
    });
};

const writeFile = async (data) => {
    return new Promise((success, fail) => {
        fs.writeFile(DATA_SOURCE, data, (err) => {
            if (err) {
                return fail(err);
            }

            return success();
        });
    });
};

// CRUD 

const list = async () => {
    const file = await readFile();
    return JSON.parse(file);
};

const add = async (data) => {
    const file = await readFile();
    const groceries = JSON.parse(file);

    groceries.push(data);

    await writeFile(JSON.stringify(groceries));
};

const remove = async (index) => {
    const file = await readFile();
    const groceries = JSON.parse(file);

    groceries.splice(index, 1);

    await writeFile(JSON.stringify(groceries));
};

const getOne = async (index) => {
    const file = await readFile();
    const groceries = JSON.parse(file);

    return groceries[index];
};

const update = async (index, data) => {
    const file = await readFile();
    const groceries = JSON.parse(file);

    groceries[index] = data;

    await writeFile(JSON.stringify(groceries));
};

module.exports = {
    list,
    add,
    remove,
    getOne,
    update,
};
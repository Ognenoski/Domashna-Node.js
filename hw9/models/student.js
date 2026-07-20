const fs = require('fs');

const DATA_SOURCE = `${__dirname}/../students.json`;

//IO Utility functions

const readFile = async() => {
    return new Promise((success, fail) => {
        fs.readFile(DATA_SOURCE, 'utf-8', (err, data) => {
            if(err){
                return fail(err);
            }else{
                return success(data);
            }
        });
    });
}

const writeFile = async(data) => {
    return new Promise((success, fail) => {
        fs.writeFile(DATA_SOURCE, data, (err) => {
            if(err){
                return fail(err);
            }else{
                return success();
            }
        });
    });
}

// CRUD functions
// so list ke gi izlistuvame studentite

const list = async() => {
    let file = await readFile();
    let fileData = JSON.parse(file);
    return fileData;
}

//so add ke dodavame novi studenti

const add = async(data) => {
    let file = await readFile();
    let fileData = JSON.parse(file); //JSON to string
    fileData.push(data);
    await writeFile(JSON.stringify(fileData)); //string to JSON
}

// i++ vi e isto so i = i + 1

//so remove ke go izbriseme studentot za koj ke klikneme brisi 

const remove = async(index) => {
    index = Number(index);
    let file = await readFile();
    let fileData = JSON.parse(file);
    let newFileData = fileData.filter((_, i) => index !==i);
    await writeFile(JSON.stringify(newFileData));
}
const getOne = async (index) => {
    index = Number(index);

    let file = await readFile();
    let fileData = JSON.parse(file);

    return fileData[index];
};

const update = async (index, data) => {
    index = Number(index);

    let file = await readFile();
    let fileData = JSON.parse(file);

    fileData[index] = data;

    await writeFile(JSON.stringify(fileData));
};
module.exports = {
    list,
    add,
    remove,
    update,
    getOne
}
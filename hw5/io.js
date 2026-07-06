const fs = require("fs");

const write = (filename, data) => {
    return new Promise((resolve, reject) => {
        data = JSON.stringify(data);

        fs.writeFile(filename, data, "utf8", (err) => {
            if (err) {
                return reject(err);
            }

            return resolve();
        });
    });
};

const read = (filename) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, "utf8", (err, data) => {
            if (err) {
                return reject(err);
            }

            return resolve(JSON.parse(data));
        });
    });
};

module.exports = {
    write,
    read
};

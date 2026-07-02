const siteFunkcii = require("./homework");

// BONUS
// async/await should be wrapped in try/catch

const write = async () => {
    try {
        await siteFunkcii.write("test.txt", "Domashna rabota 4.\n");
        console.log("Fajlot e zapisano uspeshno.");
    } catch (error) {
        console.error(error);
    }
};

const append = async () => {
    try {
        await siteFunkcii.append("test.txt", "Ova e nov tekst.\n");
        console.log("Fajlot e dopisano uspeshno.");
    } catch (error) {
        console.error(error);
    }
};
// 3. Read new data when change has been made with the append

const read = async () => {
    try {
        const data = await siteFunkcii.read("test.txt");
        console.log(data);
    } catch (error) {
        console.error(error);
    }
};
const test = async () => {
    await write();
    await append();
    await read();
};
test();
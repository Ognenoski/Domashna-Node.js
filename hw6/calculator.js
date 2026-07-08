const http = require("http");

const handlerCalculator = (req, res) => {
    const url = req.url;

    const [_, operacija, num1, num2] = req.url.split("/");

    const stringNumber = "1";
    Number(stringNumber); // converts string to number

    const number = 1;
    number.toString(); // converts number into string

    let result;

    switch (operacija) {
        case "sobiranje":
            result = Number(num1) + Number(num2);
            res.end(`${result}`);
            break;
        case "odzemanje":
            result = Number(num1) - Number(num2);
            res.end(`${result}`);
            break;
        case "mnozenje":
            result = Number(num1) * Number(num2);
            res.end(`${result}`);
            break;
        case "delenje":
            result = Number(num1) / Number(num2);
            res.end(`${result}`);
            break;
        case "modul":
            result = Number(num1) % Number(num2);
            res.end(`${result}`);
            break;
        case "kvadrat":
            result = Number(num1) ** 2;
            res.end(`${result}`);
            break;
        case "kub":
            result = Number(num1) ** 3;
            res.end(`${result}`);
            break;
        default:
            res.end("Nepoznata operacija");
    }
}

const newServer = http.createServer(handlerCalculator);

newServer.listen(5000);

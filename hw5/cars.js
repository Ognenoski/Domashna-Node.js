const io = require("./io");

//1. CRUD module for cars

const getAllCars = async (filename) => {
    try {
        const cars = await io.read(filename);
        return cars;
    } catch (err) {
        throw new Error("Error reading cars data: " + err.message);
    }
};

const getCarById = async (filename, id) => {
    try {
        const cars = await io.read(filename);
        const car = cars.find((car) => car.id === id);
        if (!car) {
            throw new Error(`Car with id ${id} not found`);
        }
        return car;
    } catch (err) {
        throw new Error("Error reading cars data: " + err.message);
    }
};

const addCar = async (filename, car) => {
    try {
        const cars = await io.read(filename);
        const newCar = { id: cars.length + 1, ...car };
        cars.push(newCar);
        await io.write(filename, cars);
        return newCar;
    } catch (err) {
        throw new Error("Error writing cars data: " + err.message);
    }
};

const updateCar = async ( filename, id, updatedCar) => {
    try {
        const cars = await io.read(filename);
        const index = cars.findIndex((car) => car.id === id);
        if (index === -1) {
            throw new Error(`Car with id ${id} not found`);
        }
        cars[index] = { ...cars[index], ...updatedCar };
        await io.write(filename, cars);
        return cars[index];
    } catch (err) {
        throw new Error("Error writing cars data: " + err.message);
    }
};

const deleteCar = async (filename, id) => {
    try {
        const cars = await io.read(filename);
        const index = cars.findIndex((car) => car.id === id);
        if (index === -1) {
            throw new Error(`Car with id ${id} not found`);
        }
        cars.splice(index, 1);
        await io.write(filename, cars);
        return true;
    } catch (err) {
        throw new Error("Error writing cars data: " + err.message);
    }
};
module.exports = {
    getAllCars,
    getCarById,
    addCar,
    updateCar,
    deleteCar
};
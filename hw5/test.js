const cars = require("./cars");

//3. Get all entities

const test = async () => {
    const allCars = await cars.getAllCars();
    console.log("All cars:", allCars);
};

test();
//3.Get one entity by id

const testGetCarById = async (id) => {
    const car = await cars.getCarById(id);
    console.log(`Car with ID ${id}`, car);
}

testGetCarById(1);

//2. Add new entity

const testAddCar = async () => {
    const newCar = {
        brand: "Ferrari",
        model: "Maranello",
        year: 2021
    };
    const addedCar = await cars.addCar(newCar);
    console.log("Added car:", addedCar);
};

testAddCar();

//5. Edit entity

const testUpdateCar = async (id) => {
    const updatedCar = {
        brand: "Lamborghini",
        model: "Aventador",
        year: 2022
    };
    const editedCar = await cars.updateCar(id, updatedCar);
    console.log("Edited car:", editedCar);
};
testUpdateCar(2);

//4. Remove entity

const testDeleteCar = async (id) => {
    const deleted = await cars.deleteCar(id);
    console.log("Deleted car:", deleted);
};
testDeleteCar(3);
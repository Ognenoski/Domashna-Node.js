const cars = require("./cars");

//3. Get all cars

const testGetAllCars = async () => {
    const allCars = await cars.getAllCars("data.json");
    console.log("All cars:", allCars);
};

//3.Get one car by id

const testGetCarById = async (id) => {
    const car = await cars.getCarById("data.json", id);
    console.log(`Car with ID ${id}`, car);
}

//2. Add new car

const testAddCar = async () => {
    const newCar = {
        brand: "Ferrari",
        model: "Maranello",
        year: 2021
    };
    const addedCar = await cars.addCar("data.json", newCar);
    console.log("Added car:", addedCar);
};

//5. Edit car

const testUpdateCar = async (id) => {
    const updatedCar = {
        brand: "Lamborghini",
        model: "Aventador",
        year: 2022
    };
    const editedCar = await cars.updateCar("data.json", id, updatedCar);
    console.log("Edited car:", editedCar);
};

//4. Remove car

const testDeleteCar = async (id) => {
    const deleted = await cars.deleteCar("data.json", id);
    console.log("Deleted car:", deleted);
};


const runTests = async () => {

    await testGetAllCars();
    await testGetCarById(1);
    // await testAddCar();
    // await testUpdateCar(2);
    // await testDeleteCar(3);
}; 

runTests();
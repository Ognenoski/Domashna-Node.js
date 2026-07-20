const express = require("express");

const groceryController = require("../controllers/groceryController");

const router = express.Router();

// Forma za dodavanje
router.get("/groceries", groceryController.getAdd);

// Dodavanje na nov artikl
router.post("/groceries", groceryController.postAdd);

// Lista na artikli
router.get("/groceries/list", groceryController.getGroceries);

// Brisenje
router.get("/delete", groceryController.deleteGrocery);

// Edit 
router.get("/edit", groceryController.getEdit);
router.post("/edit", groceryController.postEdit);

module.exports = router;
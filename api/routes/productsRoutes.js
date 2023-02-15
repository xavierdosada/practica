const express = require("express");
const router = express.Router();
const products = [];

router.post("/", (req, res) => {
    const {price, name, category} = req.body;

    if (price && name && category){
        req.body.id = products.length+1;
        products.push(req.body)
        res.status(201).send();
    } else {
        res.status(404).json({errMessage: "Falta precio, nombre o categoria"});
    }
})

router.get("/", (req, res) => {
    res.status(200).json(products)
})

module.exports = router;

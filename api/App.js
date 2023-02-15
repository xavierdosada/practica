const express = require('express')
const app = express()
const port = 8000
const cors = require("cors");
const usersRoutes = require("./routes/usersRoutes");
const productsRoutes = require("./routes/productsRoutes")
const mongoose = require('mongoose')
const session = require('express-session')

mongoose.connect("mongodb+srv://xavierDosada:dx7F5199@cluster0.lwasi2p.mongodb.net/?retryWrites=true&w=majority").then(() => {
  console.log("mongodb connected")
})
app.use(cors());
app.use(session({secret: "palabraClave", saveUninitialized:false, resave: false}))
app.use(express.json());
app.use("/user", usersRoutes);
app.use("/products", productsRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
const express = require("express");
const router = express.Router();
const users = [];
const userModel = require("../models/users")
const bcrypt = require('bcryptjs')

router.post("/", (req, res) => {
    const {name, lastName, email, date, password} = req.body
    if (name && lastName && email && date && password){
        req.body.id = users.length+1;
        // users.push(req.body)
        userModel.create(req.body).then((user) => {
            console.log(user);
            res.status(201).json(user);
        }).catch((error) => {
            console.log(error);
            res.status(400).end();
        })
    } else {
        res.status(404).send({errorMessage: "No se encotro, name, lastName, email, date o password "})
    }
});

router.get("/", (req, res) => {
    res.status(200).json(users)
})

router.delete("/:id", (req, res) => {
    const id = req.params.id;
    userModel.findByIdAndDelete(id).then(() => {
        res.status(200).send("OK")
    }).catch((error) => {
        res.status(400).json(error);
    })
})

router.get("/:id", (req, res) => {
    const user = users.find((user) => {
        return user.id == req.params.id
    })

    if (user === undefined){
        res.status(404).send()
    } else {
        res.status(200).json(user);
    }
})


router.post("/login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    // const user = users.find((user) => {
    //     return user.email == email
    // })
    //VOY A BUSCAR LOS DATOS A LA BD
    userModel.find({email: email}).then((user) => {
        if (user.length > 0){
            bcrypt.compare(password, user[0].password, (error, success) => {
                if (error){
                    res.status(500).send("Error de servidor")
                } 
                else if (!success){
                    res.status(401).send("Credenciales invalidas")
                } else {
                    req.session.user = user[0];
                    res.status(200).send("OK")
                }
            })
            /*if (password == user[0].password){
                req.session.user = user[0];
                res.status(200).json(user[0]);
            } else {
                res.status(400).json({errorMessage: "La contraseña no coincide con el email"});
            }*/
        } else {
            res.status(400).json({errorMessage: "El usuario con ese email no existe"})
        }  
    })
})

router.get("/data/:id", (req, res) => {
    console.log(req.session.user)
    if (req.session && req.session.user){
        userModel.findById(req.params.id).then((user) => {
            res.status(200).json({user})
        })  
    }
})

module.exports = router;

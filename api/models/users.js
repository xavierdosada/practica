const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        require: true
    },
})

//Proceso de encriptado de contraseña
UserSchema.pre("save", function(next){
    const user = this;
    if (!user.isModified("password")){
        return next()
    }
    bcrypt.genSalt(10, (error, salt) => {
        if (error){
            return next(error)
        }
        bcrypt.hash(user.password, salt, (error, hash) => {
            if (error){
               return next(error)
            }
            user.password = hash;
            next()
        })
    })
})

module.exports = mongoose.model("User", UserSchema)
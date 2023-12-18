// Importar passpotjs
const passport = require('passport')
// Importar el modelo User
const User = require('../models/User')
// Establecer la estrategia
const LocalStrategy = require('passport-local').Strategy


// Implemetar la estrategia local
passport.use(new LocalStrategy({
    //en base a email y password 
    usernameField:'email',
    passwordField:'password'
    // Function para hacer el proceso de inicio de sesion
},async(email,password,done)=>{
    
    const userBDD = await User.findOne({email})
    
    if(!userBDD) return done("Lo sentimos, el email no se encuentra registrado",false,)
    
    const passwordUser = await userBDD.matchPassword(password)
    
    if(!passwordUser) return done("Lo sentimos, los passwords no coinciden",false)
    // Retornar el usuario de la BDD
    return done(null,userBDD)
}))


// Serializar el usuraio
passport.serializeUser((user,done)=>{
    done(null,user.id)
})


// Deserializar el usurario
passport.deserializeUser(async (id, done) => {
    const userDB  = await User.findById(id).exec();
    return done(null,userDB)
});
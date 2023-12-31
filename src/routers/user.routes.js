
// IMPORTAR ROUTER DE EXPRESS
const {Router} = require('express')
const { renderRegisterForm, registerNewUser, renderLoginForm, loginUser, logoutUser, confirmEmail } = require('../controllers/user.controllers')
const { redirectIfAuthenticated } = require('../helpers/validate-auth')

// INSTANCIAR LA VVARIABLE router
const router = Router()


// ruta para mostrar el formulario de registro
router.get('/user/register',renderRegisterForm)
// ruta para capturar los datos y enviarlos a la BDD
router.post('/user/register',registerNewUser)

// ruta para mostrar el formulario de login
router.get('/user/login', redirectIfAuthenticated, renderLoginForm)
// ruta para capturar los datos del formulario y realizar el proceso de loginen conjunto con BDD
router.post('/user/login',loginUser)

//Ruta para cerrar sesion del usuario
router.post('/user/logout',logoutUser)

router.get('/user/confirmar/:token',confirmEmail)


module.exports =router
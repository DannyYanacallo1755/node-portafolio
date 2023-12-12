// IMPORTAR ROUTES DE EXPRESS
const {Router} = require('express')
const { renderIndex, renderLogin } = require('../controllers/index.controllers')

// INSTANCIAR ROUTERS
const router = Router()

router.get('/',(req,res)=>{
    res.render('index')
})

router.get('/login',(req,res)=>{
    res.render('login')
})

router.get(`/`, renderIndex)

router.get(`/login`, renderLogin)

//EXPORTAR LA VARIABLE ROUTES
module.exports = router
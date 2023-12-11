// IMPORTAR ROUTES DE EXPRESS
const {Router} = require('express')

// INSTANCIAR ROUTERS
const router = Router()

router.get('/',(req,res)=>{
    res.render('index')
})

router.get('/login',(req,res)=>{
    res.render('login')
})
//EXPORTAR LA VARIABLE ROUTES
module.exports = router
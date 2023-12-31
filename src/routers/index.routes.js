// IMPORTAR ROUTES DE EXPRESS
const {Router} = require('express')
const { renderIndex } = require('../controllers/index.controllers')

// INSTANCIAR ROUTERS
const router = Router()

router.get('/',(req,res)=>{
    res.render('index')
})

router.get(`/`, renderIndex)


//EXPORTAR LA VARIABLE ROUTES
module.exports = router
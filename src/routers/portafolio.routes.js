// IMPORTAR ROUTES DE EXPRESS
const{Router} = require('express')
const { renderAllPortafolios, renderPortafolioForm, createNewPortafolio, renderPortafolio, renderEditPortafolioForm, updatePortafolio, deletePortafolio } = require('../controllers/portafolio.controller')
const {isAuthenticated} = require('../helpers/validate-auth')

// INSTANCIAR LA VARIABLE ROUTES
const router = Router()

// RUTA PARA CARGAR LA VISTA DEL FORMULARIO
router.get('/portafolio/add', isAuthenticated, renderPortafolioForm)
// CAPTURAR LOS DATOS DEL FORMULARIO Y GUARDAR EN BDD
router.post('/portafolio/add',isAuthenticated, createNewPortafolio)
// PRESENTAR TODOS LOS PORTAFOLIOS
router.get('/portafolios',isAuthenticated, renderAllPortafolios)
// PRESENTAR EL DETALLE DE UN PORTAFOLIO
router.get('/portafolio/:id',isAuthenticated, renderPortafolio)
// CARAGR LA VISTA DEL FORMULARIO
router.get('/portafolio/edit/:id',isAuthenticated, renderEditPortafolioForm)
// CAPTURAR LOS DATOS DEL FORM Y GUARDAR EM BDD
router.put('/portafolio/edit/:id',isAuthenticated, updatePortafolio)
// ELIMINAR EL PORTAFOLIO
router.delete('/portafolio/delete/:id',isAuthenticated, deletePortafolio)

module.exports = router
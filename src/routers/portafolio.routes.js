// IMPORTAR ROUTES DE EXPRESS
const{Router} = require('express')
const { renderAllPortafolios, renderPortafolioForm, createNewPortafolio, renderPortafolio, renderEditPortafolioForm, updatePortafolio, deletePortafolio } = require('../controllers/portafolio.controller')

// INSTANCIAR LA VARIABLE ROUTES
const router = Router()

// RUTA PARA CARGAR LA VISTA DEL FORMULARIO
router.get('/portafolio/add', renderPortafolioForm)
// CAPTURAR LOS DATOS DEL FORMULARIO Y GUARDAR EN BDD
router.post('/portafolio/add', createNewPortafolio)
// PRESENTAR TODOS LOS PORTAFOLIOS
router.get('/portafolios', renderAllPortafolios)
// PRESENTAR EL DETALLE DE UN PORTAFOLIO
router.get('/portafolio/:id', renderPortafolio)
// CARAGR LA VISTA DEL FORMULARIO
router.get('/portafolio/edit/:id', renderEditPortafolioForm)
// CAPTURAR LOS DATOS DEL FORM Y GUARDAR EM BDD
router.put('/portafolio/edit/:id', updatePortafolio)
// ELIMINAR EL PORTAFOLIO
router.delete('/portafolio/delete/:id', deletePortafolio)

module.exports = router
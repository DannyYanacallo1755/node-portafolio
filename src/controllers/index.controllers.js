const Portfolio = require('../models/Portafolio')
// PRIMERA FUNCION PARA RENDERIZAR EL INDEX
const renderIndex = async(req,res)=>{
    const portfolios = await Portfolio.find().lean()
    res.render('index',{portfolios})
}



module.exports ={
    renderIndex
}

// IMPORTAR EL MODELO
const Portfolio = require('../models/Portafolio')



// METODO PARA LISTAR LOS PORTAFILO
const renderAllPortafolios = async (req,res)=>{
    // listar todos los portafolios y transformar en objetos lean
    const portfolios = await Portfolio.find().lean()
    // mandar a la vista los portafolios
    res.render('portafolio/allPortafolios',{portfolios})
}




// METODO PARA LISTAR EL DETALLE DE UN PORTAFILO
const renderPortafolio = (req,res)=>{
    res.send('Mostrar el detalle de un portafolio')
}





// METODO PARA MOSTRAR EL FORMULARIO
const renderPortafolioForm = (req,res)=>{
    res.render('portafolio/newFormPortafolio')
}

// METODO PARA GUARDAR EN LA BASE DE DATOS LOS CAPTURADO EN EL FORMS
const createNewPortafolio =async (req,res)=>{
    // DESESTRUCTURAR LOS DATOS EN REQ.BODY
    const {title, category,description} = req.body
    // CREAR UNA NUEVA INSTANCIAS
    const newPortfolio = new Portfolio({title,category,description})
    // GUARDAR EN LA BDD
    await newPortfolio.save()
    //MOSTRAR EL RESULTADO
    res.json({newPortfolio})
}








// METODO PARA ACTURALIZAR EL PORTAFOLIO
const renderEditPortafolioForm =async(req,res)=>{
    // consultar en la base de datos con el ID
    const portfolio = await Portfolio.findById(req.params.id).lean()
    res.render('portafolio/editPortfolio',{portfolio})
}

// METODO PARA ACTUALIZAR EN LA BASE DE DATOS LO CAPTURADO EN EL FORMS
const updatePortafolio = async(req,res)=>{
    const {title,category,description}= req.body
    await Portfolio.findByIdAndUpdate(req.params.id,{title,category,description})
    res.redirect('/portafolios')
}

// METODO PARA ELIMINAR EN LA BASE DE DATOS
const deletePortafolio = async(req,res)=>{
    await Portfolio.findByIdAndDelete(req.params.id)
    res.redirect('/portafolios')
}


// EXPORTACION COMMOMJS NOMBRADA
module.exports ={
    renderAllPortafolios,
    renderPortafolio,
    renderPortafolioForm,
    createNewPortafolio,
    renderEditPortafolioForm,
    updatePortafolio,
    deletePortafolio
}
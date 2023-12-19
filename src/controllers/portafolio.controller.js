
// IMPORTAR EL MODELO
const Portfolio = require('../models/Portafolio')

// IMPORTAR EL METOD
const { uploadImage } = require('../config/cloudinary')



// METODO PARA LISTAR LOS PORTAFILO
const renderAllPortafolios = async(req,res)=>{
    const portfolios = await Portfolio.find({user:req.user._id}).lean()
    res.render("portafolio/allPortafolios",{portfolios})
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

    const {title, category,description} = req.body   
    const newPortfolio = new Portfolio({title,category,description})
    newPortfolio.user = req.user._id
    if(!(req.files?.image)) return res.send("Se requiere una imagen")
    const imageUpload = await uploadImage(req.files.image.tempFilePath)
    newPortfolio.image = {
        public_id:imageUpload.public_id,
        secure_url:imageUpload.secure_url
    }
    await newPortfolio.save()
    res.redirect('/portafolios')
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
// IMPORTAR CLOUDINARY
const cloudinary = require('cloudinary').v2


console.log(process.env.CLOUD_NAME)

//ESTABLECER LAS VARIABLES DE ENTORNO
cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECRET,
    secure: true
});

//CREAR EL METODO PARA ENVIAR LA IMAGEN A CLOUDINAY Y QUE LA MISMOA SE ALMACENE
//EN UN DIRECTORIO PORTAFOLIO
module.exports.uploadImage = async(filePath) => {
    return await cloudinary.uploader.upload(filePath,{folder:'portafolio'})
}
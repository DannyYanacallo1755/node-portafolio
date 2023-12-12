// Importar express
const express = require('express')

// Importar path
const path = require('path');

const { engine }  = require('express-handlebars')

const methodOverride = require('method-override');


// Inicializaciones
//Instanciar express
const app = express()

// Configuraciones 
// Variables de configuracion
app.set('port',process.env.port || 3000)
app.set('views',path.join(__dirname, 'views'))


// Middlewares 
// El servidor va a trabajar con informacion en base a formularios
app.use(express.urlencoded({extended:false}))


// Variables globales

// RUTAS//////////////////

// Primera ruta
// app.get('/',(req,res)=>{
//     res.send("Server on")
// })

app.use(require('./routers/portafolio.routes'))
app.use(require('./routers/index.routes'))
app.use(methodOverride('_method'))
// Archivos estáticos
//Definir archivos estaticos y publicos
app.use(express.static(path.join(__dirname,'public')))

//Exportar la varible app


// Configuraciones 
app.set('views',path.join(__dirname, 'views'))
app.engine('.hbs',engine({
    defaultLayout:'main',
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'),'partials'),
    extname:'.hbs'
}))
app.set('view engine','.hbs')

// Rutas 
app.get('/',(req,res)=>{
    res.render('index')
})
app.use(express.static(path.join(__dirname,'public')))

module.exports = app
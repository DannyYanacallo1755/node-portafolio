// Importar express
const express = require('express')

// Importar path
const path = require('path');

const { engine }  = require('express-handlebars')

const methodOverride = require('method-override');
// IMPORTACION DE passport 
const passport = require('passport');

// IMPORTACION DE express-session
const session = require('express-session');

const fileUpload = require('express-fileupload')


// INICIALIZACIONES
//Instanciar express
const app = express()
require('./config/passport')

// Configuraciones 
// Variables de configuracion
app.set('port',process.env.port || 3000)
app.set('views',path.join(__dirname, 'views'))
app.use(methodOverride('_method'))




// MIDDLEWARES
// El servidor va a trabajar con informacion en base a formularios
app.use(express.urlencoded({extended:false}))
/**************************************************************/
// configurar la session del usuario
app.use(session({ 
    secret: 'secret',
    resave:true,
    saveUninitialized:true
}));
// inicializar passportjs
app.use(passport.initialize())
app.use(passport.session())
//******************************************************** */

// Variables globales

// RUTAS//////////////////

// Primera ruta
// app.get('/',(req,res)=>{
//     res.send("Server on")
// })
app.use((req,res,next)=>{
    res.locals.user = req.user?.name || null
    next()
})
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : './uploads'
}));

app.use(require('./routers/portafolio.routes'))
app.use(require('./routers/index.routes'))
app.use(methodOverride('_method'))
app.use(require('./routers/user.routes'))






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
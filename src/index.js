// CARGAR TODAS LA VARIABLES DE ENTORNO
require('dotenv').config()

// Importar la variable app
const connection = require('./database.js')
const app = require('./server.js')


connection()

app.listen(app.get('port'),()=>{
    console.log(`Server on port ${app.get('port')}`);
})
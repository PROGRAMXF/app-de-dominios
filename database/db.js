const mysql = require('mysql');


const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crud_nodejs_db'
});

conexion.connect((error)=>{
    if(error){
        console.error('El error de coneccion es: ' +error);
        return
    }
    console.log('Conectado a la bd de Mysql');
});
module.exports = conexion;
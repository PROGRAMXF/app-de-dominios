const { request } = require('express');
const conexion = require('../database/db');

exports.save = (req, res)=>{
    const user = req.body.user;
    const rol = req.body.rol;
    conexion.query('INSERT INTO users SET ?', {user:user, rol:rol}, (error, results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }

    });
};

exports.update = (req, res) =>{
    const id = req.body.id;
    const rol = req.body.rol;
    const user = req.body.user;

    //hacemos la consulta:
    conexion.query('UPDATE users SET ? WHERE id = ?', [{user:user, rol:rol}, id], (error, results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }
    })
}
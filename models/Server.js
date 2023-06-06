const express = require('express');

class Server{
    constructor(){
        this.app= express();
        this.port=process.env.PORT || 8000;
        this.paths={
            usuarios:'/api/usuarios'
        }

        this.middleware();
        this.router();
    }

    middleware(){
        //parseo y lecturas de de datos
        this.app.use(express.json());

        //directotio publicx
        this.app.use(express.static('public'));
    }
    router(){
        this.app.use(this.paths.usuarios,require('../routers/usuarios'));

    }


    listen(){
        this.app.listen(this.port, ()=>{
                    console.info(`Servidor corriendo en el puerto ${this.port}`);
                });
    }   
    
}

module.exports = Server;
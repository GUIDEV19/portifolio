const Sequelize = require('sequelize');

const sequelize = new Sequelize('portifolio', 'root', '4hBbQNVymFQX', {
    host: "localhost",
    port: 4914,
    dialect: "mysql"
});


sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso");
}).catch(function(erro){
    console.log('Erro ao conectar'+erro);
});


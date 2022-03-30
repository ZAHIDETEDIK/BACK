// importer le package pour utiliser les variables d'environnement
const dotenv = require ("dotenv");
dotenv.config();

// import mysql
const mysql = require("mysql");

// les parametres de connexion à la bd
const mysqlconnect = mysql.createConnection({
    host: "locahost",
    user: "root",
    password: "",
    database: process.env.DB_NAME
})

connection.connect((error) => {
    if (error){
        console.log("erreur de conection");
    }else{
        console.log("connecté à la base de donnée");
    }
    }
);

module.exports = connection;
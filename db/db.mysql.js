// importer le package pour utiliser les variables d'environnement
const dotenv = require ("dotenv");
dotenv.config();

// import mysql
const mysql = require("mysql");
console.log(mysql);

// les parametres de connexion à la bd
const mysqlconnect=mysql.createConnection()
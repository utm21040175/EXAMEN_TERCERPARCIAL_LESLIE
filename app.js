import mongoose from "mongoose";//le faltaba una letra
import cors from "cors";
import express from "express";
import dotenv from "dotenv"; //faltaba importar dotenv
import { test1 } from "./Parcial-3/backend/controllers/alumno.controller.js";

dotenv.config()

mongoose.connect(process.env.urldb) //faltaba una "n " en connect 
.then(()=>{
    console.log("funciona la base de datos") //esta mal escrito el console.log
})
.catch((error)=>{
    console.log("No funciona ya salio", error)//esta mal escrito el console.log
})

const app = express();
app.use(cors()); //cors esta mal escrito 
app.listen(5003, ()=>{ //la palabra "listen esta incorrecta"
    console.log("se escucha el servidor")
})

test1()

//SE AGREGO EL ARCHIVO .ENV PARA LA URL 
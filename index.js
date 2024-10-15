import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from 'path';
import { fileURLToPath } from 'url';
import ruta from "./src/routes/colores.routes.js";
import './src/database/dbConnection.js'

const app = express();
app.set("puerto", process.env.PORT || 4000);
app.listen(app.get("puerto"), () => {
  console.info("estoy escuchando el puerto " + app.get("puerto"));
});

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}))

const __filename = fileURLToPath(import.meta.url);
console.log(__filename)
const __dirname = path.dirname(__filename)
console.log(__dirname)
console.log(path.join(__dirname, '/public'))

app.use(express.static(path.join(__dirname, '/public')))

app.use('/api', ruta)

import { Router } from "express";
import {
  borrarColor,
  editarColor,
  funcionCrearColor,
  funcionPrueba,
  listarColores,
  verColor,
} from "../controllers/colores.js";

const ruta = Router();
ruta.route("/pruebaColores").get(funcionPrueba);
ruta.route("/color").post(funcionCrearColor).get(listarColores);
ruta.route("/color/:id").put(editarColor).delete(borrarColor).get(verColor);

export default ruta;

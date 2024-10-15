import Color from "../database/model/color.js";

export const funcionPrueba = (req, res) => {
  console.log("alguien hizo una solicitud");
  res.send("hola mundo");
};

export const funcionCrearColor = async (req, res) => {
  try {
    const colorNuevo = new Color(req.body);
    await colorNuevo.save();
    res.status(201).json({ mensaje: "el color fue creado con exito" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ mensaje: "ocurrio un error, no te pude crear el producto" });
  }
};

export const listarColores = async (req, res) => {
    try {
      const colores = await Color.find();
      res.status(200).json(colores);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ mensaje: "ocurrio un error, no te pude crear el producto" });
    }
  };

  export const editarColor = async (req, res) => {
    try {
      const colorBuscada = await Color.findById(req.params.id);
      if (!colorBuscada) {
        return res.status(404).json({ mensaje: "el color solicitado no existe" });
      }
      await Color.findByIdAndUpdate(req.params.id, req.body);
      res.status(200).json({ mensaje: "el color fue editado con exito" });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ mensaje: "ocurrio un error, no te pude editar tu color" });
    }
  };

  export const borrarColor = async (req, res) => {
    try {
      const colorBuscada = await Color.findById(req.params.id);
      if (!colorBuscada) {
        return res.status(404).json({ mensaje: "el color solicitado no existe" });
      }
      await Color.findByIdAndDelete(req.params.id, req.body);
      res.status(200).json({ mensaje: "el color fue borrado con exito" });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ mensaje: "ocurrio un error, no te pude borrar tu color" });
    }
  };

  export const verColor = async (req, res) => {
    try {
      const colorBuscada = await Color.findById(req.params.id);
      if (!colorBuscada) {
        return res.status(404).json({ mensaje: "el color solicitado no existe" });
      }
      res.status(200).json(colorBuscada);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ mensaje: "ocurrio un error, no te pude mostrar tu color" });
    }
  };
  
  
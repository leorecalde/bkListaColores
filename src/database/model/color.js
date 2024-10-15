import mongoose, { Schema } from "mongoose";

const coloresGuardados = new Schema({
  colores: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 20,
    unique: true,
  },
});

const Color = mongoose.model("colore", coloresGuardados);

export default Color;

import mongoose from 'mongoose';


const usuarioSchema =new mongoose.Schema({
    nombre: String,
    apellido: String,
    correo: String,
    contrasena: String
})

export default mongoose.models.Usuarios || mongoose.model('Usuarios', usuarioSchema);





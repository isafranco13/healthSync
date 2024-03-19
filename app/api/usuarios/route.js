import { connectDB } from "@/libs/mongodb";
import  Usuarios from "@/models/usuarios";
import { NextResponse } from "next/server";

//Función GET para obtener la cantidad de usuarios
export async function GET() {
    await connectDB();
    const userCount = await Usuarios.countDocuments({});
    return NextResponse.json({ count: userCount });
}

export async function POST(request) {
    await connectDB();
    const data = await request.json();
    const userExists = await Usuarios.findOne({ correo: data.correo });
    if (!userExists) {
        const usuarios = await Usuarios.create(data);
        return NextResponse.json({ usuarios });
    } else{
        //Si el usuario ya existe, no hace nada
        return NextResponse.json({ message: "Usuario ya existe" });
    }
}
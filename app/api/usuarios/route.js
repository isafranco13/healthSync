import { connectDB } from "@/libs/mongodb";
import  Usuarios from "@/models/usuarios";
import { NextResponse } from "next/server";

//Esto fue para comprobar que si se esta conectando a la base de datos
export async function GET() {
    await connectDB();
    const usuarios = await Usuarios.find({});
    return NextResponse.json(usuarios);
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
    }
}
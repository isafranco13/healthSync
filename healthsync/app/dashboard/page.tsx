"use client"
import {  signOut, useSession } from "next-auth/react";

export default function dashboard() {
    {/*const {data: session}=useSession()
    console.log(session) -> EN CASO DE QUERER VER AL USUARIO (SOLO USARLO EN LOCAL)*/}
    return(
        <main>
            <br /><br /><br /><br /><br />
            <div className="justify-center items-center">estas dentro</div>
            <button onClick={() => signOut()}>Sign Out</button>    
        </main>
        
    )
}
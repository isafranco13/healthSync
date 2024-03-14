"use client"
import Link from "next/link"
import Image from 'next/image';
import CustomButton from '../../components/CustomButton';
import {signIn} from 'next-auth/react'

export default function Form(){
    {/*const {data: session}=useSession()
    console.log(session) -> EN CASO DE QUERER VER AL USUARIO (SOLO USARLO EN LOCAL)*/}
    return(
        
        <main className="flex flex-col justify-center items-center w-full flex-1">
            <br /><br /><br /><br />
            <div className="flex w-full max-w-4xl "> {/*div principal */}
                <div className="w-full px-50"> {/*Sección de imagen y frase py-36 px-12*/}
                <br /><br /><br /><br />
                    <h2 className="text-3xl text-[#FC83A1] font-bold" >Cuida tu mente 
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transforma tu vida</h2>
                    <Image
                        src="/mental.png"
                        alt="mental"
                        width={1000}
                        height={1000}
                        className="" 
                    />
                </div>
                {/*Sección de crear cuenta*/}
                <div className="w-full px-12  bg-[#FFEBA9] rounded-2xl "> 
                <div className="py-9 px-10"><h1 className="text-3xl font-bold">Crear Cuenta</h1><br />
                    <div className="flex flex-wrap"> {/* div de nombre y apellido*/}
                        <div className="w-1/2 pl-4"><p className="text-black text-[19px] font-medium">Nombre</p>
                        <input type="text" className="bg-white rounded-lg outline-none text-base w-full h-9 pl-2"/></div>
                        <div className="w-1/2 pl-4"><p className="text-black text-[19px] font-medium">Apellido</p>
                        <input type="text" className="bg-white rounded-lg outline-none text-base w-full h-9 pl-2"/></div>
                    </div>
                    <div className="flex flex-col w-full pl-4">
                        <p className="text-black text-[19px] font-medium">Correo</p>
                        <input type="email" className="bg-white rounded-lg outline-none text-base h-9 pl-2"/>
                        <p className="text-black text-[19px] font-medium">Contraseña</p>
                        <input type="password" className="bg-white rounded-lg outline-none text-base h-9 pl-2"/>
                        <p className="text-black text-[19px] font-medium">Confirmar Contraseña</p>
                        <input type="password" className="bg-white rounded-lg outline-none text-base h-9 pl-2"/>
                        <CustomButton
                            title="Crear Cuenta"
                            containerStyles="text-white rounded-lg bg-pink-400 min-w-[100px] font-medium text-[20px] mt-5 hover:bg-E55E7F h-10"
                        />
                        <br />
                        <div>
                            <link rel="stylesheet" href="" />
                        </div>
                        <br />
                        <div className="flex flex-wrap items-center justify-stretch">
                            <div className="border-2 min-w-[135px] border-[#FC83A1] inline-block mb-2"></div>
                            &nbsp;&nbsp;&nbsp;
                            <p className="text-black text-[15px] font-bold">O</p>
                            &nbsp;&nbsp;&nbsp;
                            <div className="border-2 min-w-[135px] border-[#FC83A1] inline-block mb-2"></div>
                        </div>
                        <br />
                        <div className="flex justify-center my-2">&nbsp;
                        <button onClick={() => signIn('google', { callbackUrl: '/dashboard' })} className="flex items-center justify-center w-[299px] h-[59px] 
                        border-2 border-[#FFFFFF] bg-[#FFFFFF]  rounded px-12 py-2 font-light text-center"> <Image
                        src="/buscar.png"
                        alt="mental"
                        width={40}
                        height={40}
                        className="" 
                        />Continuar con Google</button> {/*'google', { callbackUrl: '/dashboard' }*/ }
                        </div>
                    </div>
                    
                    </div>
                </div>
            </div>
        </main>
        )
    }
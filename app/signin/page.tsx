"use client"
import Link from "next/link"
import Image from 'next/image';
import CustomButton from '../../components/CustomButton';
import {signIn} from 'next-auth/react'

export default function Form(){
    return(
        <main className="flex flex-col justify-center items-center w-full flex-1">
            <br /><br /><br /><br />
            <div className="flex w-full max-w-3xl "> {/*div principal */}
                {/*Sección de iniciar sesión*/}
                <div className="w-full px-12  bg-[#FFEBA9] rounded-2xl "> 
                    <Image
                        src="/atomo.png"
                        alt="atomo"
                        width={80}
                        height={48}
                        className="object-contain mx-auto pt-10" 
                    />
                    <div className="py-9 px-10"><h1 className="text-3xl font-bold text-center">Iniciar Sesión</h1><br />
                        <div className="flex flex-col w-full pl-4">
                            <div className="flex flex-col items-center w-full"> 
                                <label className="text-black text-[19px] font-medium block mb-1 w-3/4 mx-auto">
                                    <input type="email" className="bg-white rounded-lg outline-none text-base h-12 pl-2 w-full" placeholder="Correo"/>
                                </label> <br />
                                <label className="text-black text-[19px] font-medium block mb-1 w-3/4 mx-auto">
                                    <input type="password" className="bg-white rounded-lg outline-none text-base h-12 pl-2 w-full" placeholder="Contraseña"/>
                                </label>
                            </div>
                            <div className="flex flex-col justify-center items-center w-full">
                                <CustomButton
                                    title="Iniciar Sesión"
                                    containerStyles="text-white rounded-full bg-pink-400 font-medium mt-10"
                                />
                            </div><br />
                            <div className="flex justify-between">
                                <p className="text-black text-[17px] font-medium">¿No tienes cuenta? <Link href="/signup" className="text-[#E55E7F]">Regístrate</Link></p>
                                <p className="text-black text-[17px] font-medium"><Link href="" className="text-[#E55E7F]">¿Olvidaste tu contraseña?</Link></p>
                            </div>                            
                        </div>
                    </div>
                        <div className="flex flex-nowrap items-center justify-center">
                            <div className="border-2 min-w-[260px] border-[#FC83A1] inline-block mb-2"></div>
                            &nbsp;&nbsp;&nbsp;
                            <p className="text-black text-[15px] font-bold">O</p>
                            &nbsp;&nbsp;&nbsp;
                            <div className="border-2 min-w-[260px] border-[#FC83A1] inline-block mb-2"></div>
                        </div>
                        <br />
                        <div className="flex justify-center my-2">&nbsp;
                        <button onClick={() => signIn('google', { callbackUrl: '/dashboard' })} className="flex items-center justify-center w-[299px] h-[59px] 
                        border-2 border-[#FFFFFF] bg-[#FFFFFF]  rounded px-2 py-2 font-light text-center"> <Image
                        src="/buscar.png"
                        alt="mental"
                        width={40}
                        height={40}
                        className="mr-2" 
                        />Continuar con Google</button> {/*'google', { callbackUrl: '/dashboard' }*/ }
                        </div> <br /> <br />
                </div>
            </div> <br />
        </main>
    )
}

"use client"
import Link from "next/link"
import Image from 'next/image';
import CustomButton from '@/components/CustomButton';
import {signIn, useSession} from 'next-auth/react'
import { Navbar2 } from "@/components";
import { useRouter } from "next/navigation";
import React, {useEffect, useState} from "react";

export default function Form(){
    const router = useRouter();
    const [error, setError] = useState("");
    // const session = useSession();
    const { data: session, status: sessionStatus } = useSession();

    useEffect(() => {
        if (sessionStatus === "authenticated") {
        router.replace("/dashboard");
        }
    }, [sessionStatus, router]);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;

        const res = await signIn('credentials', {
            email,
            password,
            redirect: false,
        });

        if (res?.error) {
        setError("Invalid email or password");
        if (res?.url) router.replace("/dashboard");
        } else {
        setError("");
        }
    };

    if (sessionStatus === "loading") {
        return <h1>Loading...</h1>;
    }

    return(
        <>
        <Navbar2 />

        <main className="flex flex-col justify-center items-center w-full flex-1">
            <br /><br /><br /><br />
            <div className="flex max-w-3xl yellowContainer"> {/*div principal */}
                {/*Sección de iniciar sesión*/}
                <div className="logoContainer"> 
                    <Image
                        src="/atomo.png"
                        alt="atomo"
                        width={80}
                        height={48}
                        className="object-contain mx-auto logoSignIn" 
                    />
                    <div className="divYellowContainer"><h1 className="text-3xl font-bold text-center titleSignIn">Iniciar Sesión</h1><br />
                        <div className="flex flex-col w-full pl-4">
                            <form className="flex flex-col items-center w-full" onSubmit={handleSubmit}>                                 
                                <input type="email" className="bg-white rounded-lg outline-none text-base h-12 pl-2 w-3/4 input" placeholder="Correo"/>
                                <br />
                                <input type="password" className="bg-white rounded-lg outline-none text-base h-12 pl-2 w-3/4 input" placeholder="Contraseña"/>
                            
                                <CustomButton
                                    btnType="submit"
                                    title="Iniciar Sesión"
                                    containerStyles="text-white rounded-full bg-pink-400 font-medium mt-10 textButton"
                                />
                            </form><br />
                            <div className="flex justify-between">
                                <p className="text-black text-[17px] font-medium prSignIn">¿No tienes cuenta? <Link href="/signup" className="text-[#E55E7F]">Regístrate</Link></p>
                                <p className="text-black text-[17px] font-medium prSignIn"><Link href="" className="text-[#E55E7F]">¿Olvidaste tu contraseña?</Link></p>
                            </div>                            
                        </div>
                    </div>
                        <div className="flex flex-nowrap items-center justify-center">
                            <div className="border-2 border-[#FC83A1] inline-block mb-2 pinkLine"></div>
                            &nbsp;&nbsp;&nbsp;
                            <p className="text-black text-[15px] font-bold">O</p>
                            &nbsp;&nbsp;&nbsp;
                            <div className="border-2 border-[#FC83A1] inline-block mb-2 pinkLine"></div>
                        </div>
                        <br />
                        <div className="flex justify-center my-2">&nbsp;
                        <button onClick={() => signIn('google', { callbackUrl: '/dashboard' })} className="flex items-center justify-center w-[299px] h-[59px] 
                        border-2 border-[#FFFFFF] bg-[#FFFFFF] rounded px-2 py-2 font-light text-center"> <Image
                        src="/buscar.png"
                        alt="mental"
                        width={40}
                        height={40}
                        className="mr-2 googleLogo" 
                        />Continuar con Google</button> {/*'google', { callbackUrl: '/dashboard' }*/ }
                        </div> <br /> <br />
                </div>
            </div> <br />
        </main>
        </>
    )
}

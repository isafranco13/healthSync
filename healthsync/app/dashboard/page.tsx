"use client"
import { Footer, NavbarSignOut } from "@/components";

export default function dashboard() {
    {/*const {data: session}=useSession()
    {/* if (process.env.NODE_ENV === 'development') {
        console.log(session); // TO VIEW THE USER (USE ONLY IN LOCAL)
    } */}
    return(
        <>
            <NavbarSignOut />
            <main>
                <br /><br /><br /><br /><br />
                <div className=" text-center text-4xl font-bold">Estas dentro!!</div>
            </main>
            <Footer />
        </>
        
    )
}

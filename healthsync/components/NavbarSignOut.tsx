import Link from 'next/link';
import Image from 'next/image';
import { useSession, signOut } from 'next-auth/react'; // Import signOut

import CustomButton from './CustomButton';

const NavbarSignOut = () => {
    // Función modificada para cerrar sesión y redirigir a la página principal
    const handleSignOut = () => {
        signOut({ redirect: true, callbackUrl: '/' });
    }

    return (
        <header className="w-full absolute z-10"> 
            <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
                <Link href="/" className="flex justify-center items-center">
                    <Image
                        src="/atomo.svg"
                        alt="atomo"
                        width={50}
                        height={18}
                        className="object-contain" 
                    /> &nbsp;&nbsp;&nbsp; <strong>HealthSync</strong>
                </Link>

                <div className="ml-auto flex space-x-5">
                    <button onClick={handleSignOut} className="text-white rounded-full bg-pink-400 min-w-[150px] min-h-[48px] font-semibold">
                        Cerrar Sesión
                    </button>
                </div>
                
            </nav>
         </header>
    )
}

export default NavbarSignOut

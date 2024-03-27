"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useSession } from 'next-auth/react';

import CustomButton from './CustomButton';

const Navbar2 = () => {
    
    return (
        <header className="w-full absolute z-10"> 
            <nav className="mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
                <Link href="/" className="flex justify-center items-center">
                    <Image
                        src="/atomo.svg"
                        alt="atomo"
                        width={50}
                        height={18}
                        className="object-contain logo" 
                    /> <p className='navBarName'><strong>HealthSync</strong></p>
                </Link>                
            </nav>
         </header>
    )
}

export default Navbar2

"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useSession } from 'next-auth/react';

import CustomButton from './CustomButton';

const Navbar = () => {
    
    return (
        <header className="w-full absolute z-10"> 
            <nav className="mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
                <Link href="/" className="flex justify-center items-center">
                    <Image
                        src="/atomo.svg"
                        alt="atomo"
                        width={50}
                        height={50}
                        className="object-contain logo" 
                    />  <p className='navBarName'><strong>HealthSync</strong></p>
                </Link>

                <div className="textButtonDiv">
                    <Link href="/signup">
                    <CustomButton
                        title="Crear Cuenta"
                        btnType="button"
                        containerStyles="text-white rounded-full bg-pink-400 font-semibold textButton"
                    />
                    </Link>
                    <Link href="/signin">
                        <CustomButton
                            title="Iniciar Sesión"
                            btnType="button"
                            containerStyles="text-white	rounded-full bg-pink-400 font-semibold textButton"
                        />
                    </Link>                    
                </div>
                
            </nav>
         </header>
    )
}

export default Navbar

/*

HTML
<button id="optionsButton">Opciones</button>
<div id="optionsContainer" style="display: none;">
    <a href="/signup">Crear Cuenta</a>
    <a href="/signin">Iniciar Sesión</a>
</div>

JS
const optionsButton = document.getElementById('optionsButton');
const optionsContainer = document.getElementById('optionsContainer');

optionsButton.addEventListener('click', function() {
    optionsContainer.classList.toggle('show');
});




CSS
#optionsContainer {
    display: none;
}

@media (max-width: 414px) {
    #optionsContainer {
        display: block;
    }
}


*/
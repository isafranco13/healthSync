import Link from 'next/link';
import Image from 'next/image';

import CustomButton from './CustomButton';

const Navbar = () => {
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
                    <CustomButton
                        title="Sign In"
                        btnType="button"
                        containerStyles="text-primary-blu rounded-full bg-white min-w-[100px]"
                    />
                    <CustomButton
                        title="Log In"
                        btnType="button"
                        containerStyles="text-primary-blu rounded-full bg-white min-w-[100px]"
                    />
                </div>
            </nav>
         </header>
    )
}

export default Navbar

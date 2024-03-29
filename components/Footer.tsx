import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Footer = () => (
  <footer className='flex flex-col text-black-100  mt-5 border-t border-gray-100'>
    
    <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
      <div className='flex flex-col justify-start items-start gap-6'>
        <Image src='/atomo.svg' alt='logo' width={50} height={18} className='object-contain' />
        <p className='text-base'>
          HealthSync 2024 <br />
          All Rights Reserved &copy;
        </p>
      </div>

      <div className="footer__links">
        {footerLinks.map((item) => (
          <div key={item.title} className="footer__link">
            <h3 className="font-bold">{item.title}</h3>
            <div className="flex flex-col gap-5">
              {item.links.map((link) => (
                <Link
                  key={link.title}
                  href={link.url}
                  className="text-green-500 text-base"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>


    
    <div className='flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10'>
      <p className="text-base">@2024 HealthSync. All rights reserved</p>

      <div className="footer__copyrights-link">
      <p className="text-base">Privacy & Policy</p>
      <p className="text-base">Terms & Condition</p>
       {/* <Link href="/" className="text-green-500 text-base">
          Privacy & Policy
        </Link>
        <Link href="/" className="text-green-500 text-base">
          Terms & Condition
              </Link>*/}
      </div>
    </div>
  </footer>
);

export default Footer;

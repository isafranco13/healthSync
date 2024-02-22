import Image from "next/image";
import Link from "next/link";

const Footer = () => (
  <footer className='flex flex-col text-black-100  mt-5 border-t border-gray-100'>
    <div className='flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10'>
      <p>@2024 HealthSync. All rights reserved</p>
      <Link href="/" className="text-gray-500"> Privacy & Policy Terms & Condition </Link>

      <div className="footer__copyrights-link">
      <p>Adriana Medina Nuñez <br /> Isabel Beatriz Franco Díaz <br /> Cristina Suárez Franco </p>
      </div>
    </div>
  </footer>
);

export default Footer;

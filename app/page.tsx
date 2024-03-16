import { CustomButton, Intro } from "@/components";
import Catalog from "@/components/Catalog";
import QBP from "@/components/QBP";
import Image from "next/image";
import Link from "next/link";
import { Footer, Navbar } from "@/components";


export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Intro />
      <Catalog/>
      <QBP />
      <Footer />

    </main>
  );
}

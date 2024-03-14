"use client";

import { Dialog, Transition } from '@headlessui/react'
import Link from 'next/link';
import { Fragment, useState } from 'react'
import CustomButton from './CustomButton';

interface CustomModalButtonProps {
  imageSrc: string;
  title: string;
  content: string;
  onClick: () => void;
}

const CustomModalButton = ({ imageSrc, title, content, onClick }: CustomModalButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="mx-20 my-5 block rounded-md px-4 py-2 text-sm font-medium text-center"
    >
      <img
        src={imageSrc}
        alt={title}
        style={{ height: '200px', width: '200px' }}
        className="rounded-md drop-shadow-xl shadow-md mx-auto"
      />
      <br />
      <p>{title}</p>
    </button>
  );
};

export default function MyModal() {
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogTitle, setDialogTitle] = useState(''); // Add this line
  const [dialogContent, setDialogContent] = useState(''); // Add this line for content
  const [dialogImageSrc, setDialogImageSrc] = useState(''); // Add this line for image source

  const closeModal = () => {
    setOpenDialog(false);
  };

  const openDialogHandler = (title: string, content: string, imageSrc: string) => {
    setDialogTitle(title);
    setDialogContent(content); // Set the content state correctly
    setDialogImageSrc(imageSrc); // Set the image source state
    setOpenDialog(true);
  };

  return (
    <>
    <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Catálogo de terapias</h1>
          <p>Explora las terapias que mas te llamen la atención</p>
        </div>
      </div>

      
          {/* Botones arriba */}
      <div className="flex justify-center">
        <CustomModalButton
          imageSrc="biomagnetismo.jpg"
          title="Biomagnetismo"
          content="Fue desarrollada por el médico mexicano Dr. Isaac Goiz Durán, el objetivo es corregir desequilibrios energéticos y combatir enfermedades mediante la aplicación de imanes en puntos específicos del cuerpo. Se busca neutralizar la presencia de microorganismos patógenos y corregir desbalances en el pH del organismo."
          onClick={() => openDialogHandler("Biomagnetismo", "Fue desarrollada por el médico mexicano Dr. Isaac Goiz Durán, el objetivo es corregir desequilibrios energéticos y combatir enfermedades mediante la aplicación de imanes en puntos específicos del cuerpo. Se busca neutralizar la presencia de microorganismos patógenos y corregir desbalances en el pH del organismo.", "imanes.jpg")}
        />
        <CustomModalButton
          imageSrc="metodoYuen.png"
          title="Método Yuen"
          content="Desarrollado por el Dr. Kam Yuen, este enfoque combina principios de la medicina china, la kinesiología y otras disciplinas. Su objetivo es identificar y corregir bloqueos energéticos o tensiones en el sistema energético del cuerpo, con el fin de promover la autorregulación y facilitar la curación."
          onClick={() => openDialogHandler("Método Yuen", "Desarrollado por el Dr. Kam Yuen, este enfoque combina principios de la medicina china, la kinesiología y otras disciplinas. Su objetivo es identificar y corregir bloqueos energéticos o tensiones en el sistema energético del cuerpo, con el fin de promover la autorregulación y facilitar la curación.", "metodoYuenInfo.png")}
        />
        <CustomModalButton
          imageSrc="emocionesAtrapadas.jpg"
          title="Emociones Atrapadas"
          content="Su objetivo es ayudar a las personas a identificar, expresar y liberar emociones que se consideran atrapadas o bloqueadas, con la idea de mejorar la salud mental y emocional. La liberación de estas emociones puede contribuir al alivio de síntomas psicológicos y promover el bienestar."
          onClick={() => openDialogHandler("Emociones Atrapadas", "Su objetivo es ayudar a las personas a identificar, expresar y liberar emociones que se consideran atrapadas o bloqueadas, con la idea de mejorar la salud mental y emocional. La liberación de estas emociones puede contribuir al alivio de síntomas psicológicos y promover el bienestar.", "emocionesAtrapadasInfo.png")}
        />
      </div>
          {/* Botones abajo */}
      <div className="flex justify-center">
        <CustomModalButton
          imageSrc="bacteriasArqueas.jpg"
          title="Vibración de Bacterias y Arqueas"
          content="Consiste en identificar todo lo que pueda estar afectando nuestra salud de manera negativa: las emociones, los microorganismos patógenos (bacterias, parásitos, hongos, virus, algas y arqueas), los desequilibrios energéticos, hormonales, las alteraciones en el ADN de manera que eliminando, corrigiendo, alineando todo lo que afecta a nuestra salud podamos recuperar el equilibrio en nuestro organismo encontrando las etiologías de las enfermedades."
          onClick={() => openDialogHandler("Vibración de Bacterias y Arqueas", "Consiste en identificar todo lo que pueda estar afectando nuestra salud de manera negativa: las emociones, los microorganismos patógenos (bacterias, parásitos, hongos, virus, algas y arqueas), los desequilibrios energéticos, hormonales, las alteraciones en el ADN de manera que eliminando, corrigiendo, alineando todo lo que afecta a nuestra salud podamos recuperar el equilibrio en nuestro organismo encontrando las etiologías de las enfermedades.", "bacteriasArqueasInfo.jpg")}
        />
        <CustomModalButton
          imageSrc="cmp.png"
          title="Campos Magnéticos Pulsados"
          content="Se puede definir como un procedimiento de Fisioterapia consistente en aplicar campos magnéticos artificiales sobre una zona o todo el cuerpo humano aquejado de una disfunción o trauma, controlando la dirección, la frecuencia y la intensidad de dichos campos."
          onClick={() => openDialogHandler("Campos Magnéticos Pulsados", "Se puede definir como un procedimiento de Fisioterapia consistente en aplicar campos magnéticos artificiales sobre una zona o todo el cuerpo humano aquejado de una disfunción o trauma, controlando la dirección, la frecuencia y la intensidad de dichos campos.", "cmpInfo.png")}
        />
      </div>

      <Transition appear show={openDialog} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="flex items-center justify-center min-h-screen">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black/25" />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="z-50 w-full max-w-md mx-auto p-6 bg-white rounded-2xl text-left shadow-xl">
                {/* Contenido del diálogo */}
                <Dialog.Title
                  as="h3"
                  className="text-[25px] font-bold leading-6 text-gray-900"
                >
                  {dialogTitle}
                </Dialog.Title>
                <br />
                <p className="text-sm text-green-500 text-justify">
                {dialogContent}
                </p>
                <br/>

                <img
                src={dialogImageSrc} // Display the image here
                alt={dialogTitle}
                className="rounded-md mx-auto" // Add any additional styling you need
              />
                <br/>

                {/* Botón de cierre */}
                <button
                  type="button"
                  className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  onClick={closeModal}
                >
                  Cerrar
                </button>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
      
    <div className="flex justify-end">
      <Link href="/signup">
        <CustomButton
          title="Registrarme"
          containerStyles="text-white rounded-full bg-pink-400 min-w-[100px] font-medium mt-10"
        />
      </Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </div>

    <br />
    <br />
    <br />
    <br />
    <br />

    </>
  );
}
"use client"
import NavbarAdmin from '@/components/NavBarAdmin';
import React, { useState, useEffect } from 'react';

export default function Home() {
    const [usuarios, setUsuarios] = useState<{ _id: string, nombre: string, correo: string, apellido: string }[]>([]);

    useEffect(() => {
        fetch('/api/usuarios')
            .then(response => response.json())
            .then(data => setUsuarios(data.usuarios));
    }, []);

    return (
        
        <main className="overflow-hidden">
            <NavbarAdmin />
            

        </main>
    );
}
"use client"
import React, { useState, useEffect } from 'react';

export default function Home() {
    const [userCount, setUserCount] = useState(0);

    useEffect(() => {
        fetch('/api/usuarios') // Endpoint que devuelve la cantidad de usuarios
            .then(response => response.json())
            .then(data => setUserCount(data.count));
    }, []);

    return (
        <main className="overflow-hidden">
            <div>
                <h1>Cantidad de Usuarios: {userCount}</h1>
            </div>
        </main>
    );
}
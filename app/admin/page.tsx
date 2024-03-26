"use client"
import NavBarAdmin from '@/components/NavBarAdmin';
import React, { useState, useEffect } from 'react';

export default function Home() {
    return (
        
        <main className="overflow-hidden">
            <div className="contenedor">
                <div style={{ display: 'flex' }}>
                    <div>
                        <NavBarAdmin />
                    </div>

                    <div className='text'>
                        <p>Tu texto aquí</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
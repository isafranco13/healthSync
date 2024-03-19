import { connectDB } from '@/libs/mongodb'
import Usuarios from '@/models/usuarios'
import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

const handler = NextAuth({
    providers: [ GoogleProvider ({
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,

    })],
    callbacks: {
        async signIn({user, account}) {
            if (account && account.provider === 'google') {
                const {name, email} = user;
                try {
                    await connectDB();
                    const userExists = await Usuarios.findOne({ email });

                    if (!userExists) {
                        const res = await fetch('http://localhost:3000/api/usuarios', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                correo: email,
                                nombre: name,
                            }),
                        });
                        if (res.ok) {
                        return true;
                        }
                    }
                } catch (error) {
                    console.error(error);
                    return false;
                }
            }
            return true;
        }
    }
});
export {handler as GET, handler as POST};
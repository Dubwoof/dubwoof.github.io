import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const options: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                // get user from db here
                const user = { id: '1', name: 'J Smith', email: 'flexworx@nextwebs.de', password: 'Summerof69!' };

                if (credentials?.username === user.email && credentials?.password === user.password) {
                    return user;
                }

                return null;
            },
        }),
    ],
    // pages: {
    //     signIn: '/auth/signin',
    //     signOut: '/auth/signout',
    //     error: '/auth/error', // Error code passed in query string as ?error=
    //     verifyRequest: '/auth/verify-request', // (used for check email message)
    //     newUser: '/auth/new-user', // New users will be directed here on first sign in (leave the property out if not of interest)
    // },
};

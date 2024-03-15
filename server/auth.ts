import { getServerSession, type NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { userService } from "@server/services/userService";

export const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt",
    },
    callbacks: {
        async jwt({token, account, profile}) {
            if (account && account.type === "credentials") {
                token.userId = account.providerAccountId;
            }
            return token;
        },
        async session({session , token, user}: { session: any; token: any; user: any}) {
            session.user.id = token.userId;
            return session;
        }
    },
    pages: {
        signIn: '/login'
    },
    providers: [
        Credentials({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "jsmith@example.com" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
                const {email, password} = credentials as { email: string, password: string};

                return userService.authenticate(email, password);
            }
        })
    ],
    secret: process.env.JWT_SECRET,
}

export const getServerAuthSession = () => getServerSession(authOptions);
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
	session: {
		strategy: "jwt",
	},
	secret: process.env.NEXTAUTH_SECRET,
	providers: [
		CredentialProvider({
			type: "credentials",
			name: "Credentials",
			credentials: {
				fullname: {
					label: "Full Name",
					type: "text",
					placeholder: "Full Name",
				},
				email: { label: "Email", type: "email", placeholder: "Email" },
				password: {
					label: "Password",
					type: "password",
					placeholder: "Password",
				},
			},
			async authorize(credentials) {
				const { fullname, email, password } = credentials as {
					fullname: string;
					email: string;
					password: string;
				};
				const user: any = {
					id: 1,
					fullname: fullname,
					email: email,
					password: password,
				};
				if (user) {
					return user;
				} else {
					return null;
				}
			},
		}),
	],
	callbacks: {
		jwt({ token, account, profile, user }: any) {
			if (account?.provider === "credentials") {
				token.email = user.email;
				token.fullname = user.fullname;
			}

			return token;
		},
		async session({ session, token }: any) {
			if ("email" in token) {
				session.user.email = token.email;
				session.user.fullname = token.fullname;
			}

			return session;
		},
	},
};

export default NextAuth(authOptions);

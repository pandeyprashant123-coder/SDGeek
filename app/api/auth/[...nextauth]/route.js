import User from "@/models/user";
import { connectToDB } from "@/utils/database";
import NextAuth from "next-auth/next";
import bcrypt from "bcryptjs"

import CredentialsProvider from "next-auth/providers/credentials";


export const authOptions = {
    providers : [
        CredentialsProvider({
            name:"credentials",
            credentials:{},

            async authorize(credentials){
                const {email,password} = credentials
                console.log(credentials)
                try {
                    await connectToDB()
                    const existingUser = await User.findOne({email})

                    if(!existingUser) return null
                    const passwordMatch = await bcrypt.compare(password,existingUser.password)
                    if(!passwordMatch)
                    {
                        console.log("invalid passwd")
                        return
                    }  
                    // console.log(existingUser,"hi")
                    return existingUser
                } catch (error) {
                    console.log(error)
                }
            },
        }),
    ],
    session:{
        strategy:"jwt",
    },
    secret:process.env.NEXTAUTH_SECRET,
    pages:{
        signIn:"/"
    }
}

const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}
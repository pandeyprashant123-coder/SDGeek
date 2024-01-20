import User from "@/models/user";
import { connectToDB } from "@/utils/database"
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"

export async function POST(req){
try {
    const {email,password,firstName,lastName,confirmPassword} = await req.json()
    await connectToDB();

    const existingUser = await User.findOne({email}).select("_id")
    if(existingUser) return NextResponse.json({existingUser},{message:"user already exists"},{status:400})

    if(password!==confirmPassword) return NextResponse.json({message:'passoword donot match'},{status:404})

    const hashedPassword = await bcrypt.hash(password,12)

    const result = await User.create({email,password:hashedPassword,name:`${firstName} ${lastName}`})
    console.log(result)
    // await User.create({name,email,password})
    return NextResponse.json({result:result},{message:"user created"},{status:201})
} catch (error) {
    console.log(error)
}
}


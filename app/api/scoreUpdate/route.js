
import User from "@/models/user";
import { connectToDB } from "@/utils/database"
import { NextResponse } from "next/server";

export async function PATCH(req){
    const {score,email} =await req.json()
    try {
        await connectToDB()
        const existingUser = await User.findOne({email})
        if(!existingUser) return new NextResponse.json({message:"Score do not exists"},{status:404})
        existingUser.score = score
        // console.log(existingUser)
        await existingUser.save()
        return NextResponse.json({status:200})
    } catch (error) {
        console.log("hi",error)
    }
}
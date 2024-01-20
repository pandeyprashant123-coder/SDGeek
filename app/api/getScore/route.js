import User from "@/models/user";
import { connectToDB } from "@/utils/database"
import { NextResponse } from "next/server";

export async function GET(req){
    const {searchParams} = new URL(req.url);
    const email = searchParams.get("email");
try {
    await connectToDB();
    const existingUser = await User.findOne({email})
    if(!existingUser) return NextResponse.json({existingUser},{message:"user doesnot exists"},{status:400})

    return NextResponse.json({existingUser},{message:"user "},{status:201})
} catch (error) {
    console.log(error)
}
}


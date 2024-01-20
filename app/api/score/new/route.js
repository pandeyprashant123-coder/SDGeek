import { connectToDB } from "@/utils/database";
import User from "@/models/user";
import { NextResponse } from "next/server";

export const GET = async(req)=>{

    try {
        await connectToDB()
        const leaderBoardData = await User.find().sort({score:-1})
        return NextResponse.json({leaderBoardData},{message:"user "},{status:201})
    } catch (error) {
        console.log(error)
    }
}
import { connectToDB } from "@/utils/database";
import Score from "@/models/game";

export const POST = async(req)=>{
    const{score,userId} = await req.json()

    try {
        await connectToDB()
        const newScore = new Score({
            score,
            creator:userId
        })
        await newScore.save()
        return new Response(JSON.stringify(newScore),{status:201})

    } catch (error) {
        console.log(error)
    }
}
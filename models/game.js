import {Schema,model,models} from "mongoose";

const scoreSchema = new Schema({
    score: {
        type: string,
      },
      creator:{
        type:Schema.Types.ObjectId,
        ref:'User'
      }
},
      {
        timestamps:true
      }

);

const Score = models.Score || model('Score',UserSchema)

export default Score;
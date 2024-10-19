import PrismaCleint from "@repo/prisma/client"
import { getServerSession } from "next-auth";

import { NextResponse } from "next/server";
import { authOptions } from "../../../lib/authOptions";


export const GET=async()=>{
    const session=await getServerSession(authOptions); 
    console.log(session);
    if(session.user){
        return NextResponse.json({
            message:"logged"
        })
    }else{
        return NextResponse.json({
            message:"not logged"
        })
    }
}
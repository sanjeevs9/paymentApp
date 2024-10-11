import PrismaClient from "@repo/prisma/client"
import {useBalance} from "@repo/store/useBalance"
import { NextResponse } from "next/server";
const client=new PrismaClient();

export const GET=async()=>{
    console.log(useBalance)
    return NextResponse.json({
        message:"hello how are you"
    })
}
import PrismaClient from "@repo/prisma/client"

import { NextResponse } from "next/server";
const client=new PrismaClient();

export const GET=async()=>{
    return NextResponse.json({
        message:"hello how are you"
    })
}
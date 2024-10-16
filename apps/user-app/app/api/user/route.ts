import PrismaCleint from "@repo/prisma/client"

import { NextResponse } from "next/server";


export const GET=async()=>{
    return NextResponse.json({
        message:"hello how are ou"
    })
}
import {NextRequest, NextResponse} from "next/server";
import client from "@/prisma/client";

export async function GET(request: NextRequest,
                          response: NextResponse){

    const newUser = await client.user.findMany({
        distinct: ['name'],
        take: 2,
        skip: 1
    })

    return NextResponse.json({newUser})
}
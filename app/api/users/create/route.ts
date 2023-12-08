import {NextRequest, NextResponse} from "next/server";
import client from "@/prisma/client";

export async function GET(request: NextRequest,
                          response: NextResponse){

    const newUser = await client.user.findMany({
        where:{
            name: "test1"
        },
        take: 2,
        skip: 1,
        orderBy: {
            name: "asc"
        }
    })

    return NextResponse.json({newUser})
}
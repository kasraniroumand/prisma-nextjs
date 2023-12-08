import {NextRequest, NextResponse} from "next/server";
import client from "@/prisma/client";

export async function GET(request: NextRequest,
                          response: NextResponse){
    // find unique always return a single object
    // just find based on unique attributes like id
    const newUser = await client.user.findUnique({
        where: {
            id: 1
        }
    })

    console.log(newUser)
    return NextResponse.json({newUser})
}
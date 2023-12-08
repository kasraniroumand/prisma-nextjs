import {NextRequest, NextResponse} from "next/server";
import client from "@/prisma/client";

export async function GET(request: NextRequest,
                          response: NextResponse){
    // find unique always return a single object
    // just find based on unique attributes like id
    const newUser = await client.user.findFirst({
        where: {
            userPreference:{
                id: 1
            }
        },
        select:{
            name: true,
        }
    })

    console.log(newUser)
    return NextResponse.json({newUser})
}
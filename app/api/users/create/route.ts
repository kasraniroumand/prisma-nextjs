import {NextRequest, NextResponse} from "next/server";
import client from "@/prisma/client";

export async function GET(request: NextRequest,
                          response: NextResponse){
    // find unique always return a single object
    // just find based on unique attributes like id
    const newUser = await client.user.findMany({
        // where: {
        //     name: 'test1'
        // },
        distinct: ['name']
    })

    //console.log(newUser)
    return NextResponse.json({newUser})
}
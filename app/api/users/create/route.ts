import {NextRequest, NextResponse} from "next/server";
import client from "@/prisma/client";

export async function GET(request: NextRequest,
                          response: NextResponse){
    const newUser = await client.user.createMany({
        data: [
            {
                name: "test1",
                email: "test1@gamil.com",
                age : 20,
            },{
                name: "test2",
                email: "test2@gamil.com",
                age : 20,
            }
        ],
    }).catch(e=>{
        return NextResponse.json({error: e},{status: 400})
    })
    console.log(newUser)
    return NextResponse.json({newUser})
}
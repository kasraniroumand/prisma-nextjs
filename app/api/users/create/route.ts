import {NextRequest, NextResponse} from "next/server";
import client from "@/prisma/client";

export async function GET(request: NextRequest,
                          response: NextResponse){
    const newUser = await client.user.create({
        data: {
            name: "John2223445665 Doe",
            email: "example225255446642@gamil.com",
            age : 20,
            userPreference:{
                create:{
                    emailupdates: true,
                }
            }
        },
    }).catch(e=>{
        return NextResponse.json({error: e},{status: 400})
    })
    console.log(newUser)
    return NextResponse.json({newUser})
}
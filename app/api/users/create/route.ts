import {NextRequest, NextResponse} from "next/server";
import client from "@/prisma/client";



/*
*
* SELECT `next2`.`User`.`id`,
       `next2`.`User`.`name`,
       `next2`.`User`.`email`,
       `next2`.`User`.`age`,
       `next2`.`User`.`role`,
       `next2`.`User`.`userpreferenceid`
FROM `next2`.`User`
WHERE (`next2`.`User`.`name` = ? AND `next2`.`User`.`name` <> ? AND `next2`.`User`.`age` IN (?, ?) AND
       `next2`.`User`.`age` NOT IN (?, ?) AND `next2`.`User`.`age` < ? AND `next2`.`User`.`age` <= ? AND
       `next2`.`User`.`age` > ? AND `next2`.`User`.`age` >= ? AND `next2`.`User`.`email` LIKE ? AND
       `next2`.`User`.`email` LIKE ?)
ORDER BY `next2`.`User`.`name` ASC
LIMIT ? OFFSET ?
*
* */




export async function GET(request: NextRequest,
                          response: NextResponse){

    const newUser = await client.post.findMany({
        where: {
            AND: [
                {
                    author: {
                        is: {
                            age: 27
                        }
                    }
                },
                {
                    author: {
                        isNot: {
                            age: 27
                        }
                    }
                }
            ]

        }
    })



    return NextResponse.json({newUser})
}
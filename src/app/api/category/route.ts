import { NextResponse } from "next/server"
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
    try{
            console.log('here')
            const categories = await prisma.category.findMany()
            console.log(categories)
            if(categories){
                return NextResponse.json({categories:categories},{status:200})
            }
            else{
                return NextResponse.json({message:"Unable to get categories"},{status:400})
            }
            
        
    }
    catch(error){
        return NextResponse.json({message:'Internal Server Error'},{status:500})
    }
}
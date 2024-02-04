import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../lib/db";
import { error } from "console";
//
export async function GET(req: NextRequest) {
  try {
    const users=await prisma.user.findMany();
    return Response.json({ message: "Success",users });
  } catch (error) {
    return NextResponse.json({
      message: "Error", error
    },
      {
        status: 500,
      }
    );
  }
}
//
export async function POST(req: Request) {
  const { name } = await req.json();
  try {
    const user = await prisma.user.create({
      data: {
        name
      }
    })
    return Response.json({ message: "Ok", user });

  } catch (error) {
    return NextResponse.json({
      message: "Error", error
    },
      {
        status: 500,
      }
    );
  }
}
//
export async function DELETE(req:Request){
  const {id}= await req.json();

 try {
  const user=await prisma.user.delete({
      where: {
        id
      }
  });
  return Response.json({ message: "Ok", user });
 } catch (error) {
  return NextResponse.json({
    message: "Error", error
  },
    {
      status: 500,
    }
  );
 }
}
//
export async function PUT(req:Request){
  const {id, name}= await req.json();

  try {
    const user=await prisma.user.update({
        where: {
          id
        },
        data:{
          name
        }
    });
    return Response.json({ message: "Ok", user });
   } catch (error) {
    return NextResponse.json({
      message: "Error", error
    },
      {
        status: 500,
      }
    );
   }
}
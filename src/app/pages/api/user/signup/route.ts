import dbConnect from "@/lib/DB_Connection/dbConnection";
import { UserSchema } from "@/lib/Schema/Schema";
import { NextRequest, NextResponse } from "next/server";

import Jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";

export async function POST(req: NextRequest, res: NextResponse) {
  await dbConnect();
  try {
    const reqBody = await req.json();
    const { NanoId, name, email, password, userImg, recentDate } = reqBody;

    const hashedPassword = await bcryptjs.hash(password, 10);

    const preSendData = await new UserSchema({
      NanoId,
      name,
      email,
      password: hashedPassword,
      userImg,
      recentDate,
    });
    const SaveData = await preSendData.save();
    const tokenData = {
      _id: SaveData?._id,
      NanoId: SaveData?.NanoId,
      name: SaveData?.name,
      email: SaveData?.email,
      recentDate: SaveData?.recentDate,
    };
    const token = Jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
      expiresIn: "1d",
    });
    const response = NextResponse.json({
      message: "SignUp Successful",
      success: true,
    });
    response.cookies.set("token", token, { httpOnly: true });
    return response;
  } catch (error: any) {
    return NextResponse.json({
      message: "Data is not correct",
      success: false,
    });
  }
}

import dbConnect from "@/lib/DB_Connection/dbConnection";
import { ProductsSchema } from "@/lib/Schema/Schema";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest, response: NextResponse) {
  await dbConnect();
  try {
    const reqComments = await request.json();
    const { userImg, userId, userEmail, productId, recentDate, comments } =
      reqComments;

    if (userId !== undefined) {
      const findProducts = await ProductsSchema.findById({ _id: productId });
      findProducts?.comments.push({
        userImg: userImg,
        userId: userId,
        userEmail: userEmail,
        productId: productId,
        recentDate: recentDate,
        comments: comments,
        dateField: Date.now(),
      });
      await findProducts.save();
      return NextResponse.json({
        message: "comment successful",
        success: true,
      });
    } else {
      return NextResponse.json({
        message: "You are not logged in",
        success: true,
      });
    }
  } catch (error: any) {
    return NextResponse.json({
      message: " something went wrong",
      success: false,
    });
  }
}

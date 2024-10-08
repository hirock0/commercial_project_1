import dbConnect from "@/lib/DB_Connection/dbConnection";
import { ProductsSchema } from "@/lib/Schema/Schema";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest, response: NextResponse) {
  await dbConnect();
  try {
    const reqLike = await request.json();
    const { userId, userEmail, productId, recentDate } = reqLike;
    if (userId !== undefined) {
      const findProducts = await ProductsSchema.findById({ _id: productId });
      const likedData = findProducts?.likes.find(
        (item: any) => item.userId == userId
      );
      if (likedData == undefined) {
        findProducts?.likes.push({ userId: userId });
        await findProducts.save();
        return NextResponse.json({ message: "liked", success: true });
      } else {
        findProducts?.likes.pull({ userId: userId });
        const like = await findProducts.save();
        return NextResponse.json({ message: "unliked", success: false });
      }
    } else {
      return NextResponse.json({
        message: "You are not logged in",
        success: false,
      });
    }
  } catch (error: any) {
    return NextResponse.json({
      message: " something went wrong",
      success: false,
    });
  }
}

import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/DB_Connection/dbConnection";
import { ProductsSchema } from "@/lib/Schema/Schema";
export async function POST(req: NextRequest) {
  await dbConnect();
  try {
    const reqBody = await req.json();
    const {
      productName,
      productAnotherImages,
      productImageLink,
      price,
      rank,
      category,
      stock,
      brand,
      importFrom,
      madeIn,
      productDescriptions,
      recentDate,
    } = reqBody;

    const preSaveProduct = await new ProductsSchema({
      productName,
      productAnotherImages,
      productImageLink,
      price,
      rank,
      category,
      stock,
      brand,
      importFrom,
      madeIn,
      productDescriptions,
      recentDate,
    });
    await preSaveProduct.save();
    return NextResponse.json({
      message: "products are uploaded",
      success: true,
    });
  } catch (error: any) {
    return NextResponse.json({
      message: "products are not uploaded",
      success: false,
    });
  }
}

export async function GET(req: NextRequest) {
  dbConnect();
  try {
    const Products = await ProductsSchema.find().sort({ dateField: -1 });
    return NextResponse.json({
      messge: "products are found",
      success: true,
      Products,
    });
  } catch (error: any) {
    return NextResponse.json({
      messge: "products are not found",
      success: false,
    });
  }
}

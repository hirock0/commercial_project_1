import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/DB_Connection/dbConnection";
import { ProductsSchema } from "@/lib/Schema/Schema";

export async function GET(req: NextRequest, res: any) {
  dbConnect();
  try {
    const id = { _id: res?.params.find_product };
    const Product = await ProductsSchema.findById(id);
    return NextResponse.json({
      messge: "products are found",
      success: true,
      Product,
    });
  } catch (error: any) {
    return NextResponse.json({
      messge: "products are not found",
      success: false,
    });
  }
}

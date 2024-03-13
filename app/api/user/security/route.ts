import User from "@/lib/models/user.models";
import { connectToDatabase } from "@/lib/mongoose";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

type NewResponse = NextResponse<{
  status: string;
}>;

type ErrorResponse = NextResponse<{ error: string }>;

export const PUT = async (
  req: NextRequest
): Promise<NewResponse | ErrorResponse> => {
  try {
    await connectToDatabase();
    const body = await req.json();

    if (!mongoose.Types.ObjectId.isValid(body.userId)) {
      return NextResponse.json(
        {
          error: "User not found",
        },
        { status: 401 }
      );
    }

    const user = await User.findById(body.userId).select("+password");

    if (!(await bcrypt.compare(body.password, user.password))) {
      return NextResponse.json(
        {
          error: "Invalid password. Please check your credentials.",
        },
        { status: 401 }
      );
    }
    const hashedPassword = await bcrypt.hash(body.newPassword, 10);
    await user.updateOne({ password: hashedPassword });

    return NextResponse.json({
      status: "success",
    });
  } catch (err: any) {
    return NextResponse.json(
      {
        error: err.message,
      },
      { status: 500 }
    );
  }
};

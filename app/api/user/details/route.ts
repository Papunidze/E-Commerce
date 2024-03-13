import User from "@/lib/models/user.models";
import { connectToDatabase } from "@/lib/mongoose";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

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

    const updatedUser = await User.findByIdAndUpdate(
      body.userId,
      { name: body.name, image: body.image },
      { new: true }
    );

    if (!updatedUser) {
      return NextResponse.json(
        {
          error: "User not found",
        },
        { status: 401 }
      );
    }

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

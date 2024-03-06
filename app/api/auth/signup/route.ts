import User from "@/lib/models/user.models";
import { connectToDatabase } from "@/lib/mongoose";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

type NewResponse = NextResponse<{
  status: string;
}>;

type ErrorResponse = NextResponse<{ error: string }>;

export const POST = async (
  req: Request
): Promise<NewResponse | ErrorResponse> => {
  try {
    const body = await req.json();

    await connectToDatabase();

    const existingUser = await User.findOne({
      email: body.email.toLowerCase(),
    });

    if (existingUser)
      return NextResponse.json(
        {
          error: "Email already in use. Please use a different email",
        },
        { status: 500 }
      );

    const hashedPassword = await bcrypt.hash(body.password, 10);

    const initials = body.name
      .split(" ")
      .map((n: string) => n[0])
      .join("");

    const newUser = new User({
      name: body.name,
      email: body.email.toLowerCase(),
      avatar: `https://api.dicebear.com/5.x/initials/svg?seed=${initials}`,
      password: hashedPassword,
    });

    await newUser.save();

    return NextResponse.json({
      status: "success",
    });
  } catch (err: any) {
    return NextResponse.json({
      error: err.message,
    });
  }
};

import { connect } from "../../../dbConfig/dbConfig";
import { NextResponse } from "next/server";
import User from "../../../models/userModel"; // Ensure correct case

connect();

export async function POST(req) {
  try {
    const reqBody = await req.json();
    const { token } = reqBody;
    console.log("Received token:", reqBody);

    console.log("Received token:", token);

    const user = await User.findOne({
      verifyToken: token,
      verifyTokenExpiry: { $gt: Date.now() },
    });

    console.log("User: ", user);

    if (!user) {
      console.error("User not found or token expired");
      return NextResponse.json({ error: "Token is invalid or expired" });
    }

    console.log("User found:", user);

    user.isVerified = true;
    user.verifyToken = undefined;
    user.verifyTokenExpiry = undefined;

    await user.save();

    console.log("User verification status updated:", user);

    return NextResponse.json({ message: "Email verified successfully", success: true });

  } catch (error) {
    console.error("Error in email verification route:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

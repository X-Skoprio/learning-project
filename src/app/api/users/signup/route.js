import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { sendEmail } from "@/helpers/mailer";
import crypto from "crypto";

export async function POST(req) {
  await connect(); // Ensure database is connected

  try {
    const reqBody = await req.json();
    const { username, email, password } = reqBody;

    if (!username || !email || !password) {
      console.error("Missing required fields");
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.error("User already exists");
      return NextResponse.json(
        { error: "User already exists" },
        { status: 409 }
      );
    }

    // Hash password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    // Generate verification token
    const verifyToken = crypto.randomBytes(32).toString("hex");
    const verifyTokenExpiry = Date.now() + 3600000; // 1 hour expiry
    console.log("Generated verify token:", verifyToken);

    // Create new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      verifyToken,
      verifyTokenExpiry,
      isVerified: false,
    });

    await newUser.save();

    // Send verification email
    await sendEmail(email, "VERIFY", newUser._id);

    return NextResponse.json({
      message: "User created successfully. Please check your email to verify your account.",
      success: true,
      user: newUser,
    });
  } catch (error) {
    console.error("Error in sign-up route:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

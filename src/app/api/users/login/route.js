import { connect } from "../../../../dbConfig/dbConfig.js";
import User from "@/models/userModel";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req) {
    await connect(); // Ensure database is connected
  
    try {
      const reqBody = await req.json();
      const { email, password } = reqBody;
  
      if (!email || !password) {
        return NextResponse.json(
          { error: "Missing required fields" },
          { status: 400 }
        );
      }
  
      // Check if user exists
      const user = await User.findOne({ email });
      if (!user) {
        return NextResponse.json(
          { error: "User does not exist" },
          { status: 404 }
        );
      }

      const validPassword = await bcryptjs.compare(password, user.password);

      if (!validPassword) {
        return NextResponse.json({error : "Invalid password"}, {status: 401});
      }

      // Create token 
      const tokenData = {
        id: user._id,
        username: user.username,
        email: user.email
      }

      const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, {expiresIn: "1h"});

      const response = NextResponse.json({
        message: "Login successful",
        success: true,
        token, // Include the token in the response body
      }, {status: 200});

      response.cookies.set("token", token, {
        httpOnly: true
      });

      return response;

    } catch (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

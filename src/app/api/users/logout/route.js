import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const response = NextResponse.json(
      { message: "Logout successful", success: true },
      { status: 200 }
    );
    response.cookies.set("token", "", {
      httpOnly: true,
      expires: new Date(0), // Set the cookie expiration date to the past
    });

    return response;
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

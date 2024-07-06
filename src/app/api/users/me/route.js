import { getDataFromToken } from "../../../helpers/getDataFromToken";
import { NextRequest, NextResponse } from "next/server";
import User from "../../../models/userModel";
import { connect } from '../../../dbConfig/dbConfig';

export async function GET(req) {
    await connect();
    try {
        const userID = getDataFromToken(req);
        const user = await User.findOne({ _id: userID }).select("-password");
        return NextResponse.json({ 
            message: "User fetched successfully",
            data: user,
        });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}

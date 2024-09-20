import { logout } from "@/services/users/register";
import { NextResponse } from "next/server";
import { middleware } from "../product/middleware";

export async function POST(req, res) {
    const auth = await middleware(req);
    if (auth.status !== 200) {
        return NextResponse.json({
            message: "Unauthorized access",
        }, { status: 400 });
    }
    try {
        const output = await logout();
        return NextResponse.json({
            message: 0,
            output
        }, { status: 200 });
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: -1,
            error
        }, { status: 500 });
    }
}

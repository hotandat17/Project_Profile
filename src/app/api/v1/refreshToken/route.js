import { refreshToken } from "@/services/users/register";
import { NextResponse } from "next/server";

export async function POST(req, res) {
    try {
        const newToken = await refreshToken()
        return NextResponse.json({
            messenge: 0,
            newToken
        }, { status: 200 })
    } catch (error) {

        return NextResponse.json({
            messenge: -1,
            error
        }, { status: 500 })
    }
}
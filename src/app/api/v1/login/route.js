import { loginAdmin } from "@/services/users/register";
import { NextResponse } from "next/server";


export async function POST(req) {
    try {
        const { email, password } = await req.json()
        if (!email || !password) {
            return NextResponse.json({
                messenge: -1,
                error: 'Vui lòng nhập đầy đủ thông tin'
            }, { status: 403 })
        }
        const login = await loginAdmin({ email, password })
        return NextResponse.json(login, { status: 201 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            messenge: -1,
            error
        }, { status: 500 })
    }
}
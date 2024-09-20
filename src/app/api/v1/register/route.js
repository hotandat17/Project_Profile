import { createAdmin, loginAdmin } from '@/services/users/register'
import { NextRequest, NextResponse } from 'next/server'


export async function POST(req) {
    try {
        const { fullname, email, password } = await req.json()
        console.log(fullname, email, password)
        const create = await createAdmin({ fullname, email, password })
        return NextResponse.json(create, { status: 201 })
    } catch (error) {
        return NextResponse.json(error, { status: 500 })
    }
}


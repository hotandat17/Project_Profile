import { adminProduct } from "@/services/project/serviceProject"
import { NextResponse } from "next/server"


export async function GET(req) {
    try {
        const { searchParams } = new URL(req.url);
        const page = searchParams.get("page")

        const search = searchParams.get("search")

        const data = await adminProduct(page, search)
        return NextResponse.json({ data }, { status: 200 })
    } catch (error) {
        // console.log(error)
        return NextResponse.json({ error }, { status: 500 })
    }
}
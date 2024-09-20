import { NextResponse, NextRequest } from "next/server";
import { middleware } from "./middleware";
import { createProject, showProduct } from "@/services/project/serviceProject";
import { json } from "body-parser";

export async function GET(req) {
    const authResult = await middleware(req);
    if (authResult.status !== 200) {
        return NextResponse.json({ message: authResult.message }, { status: authResult.status });
    }

    try {
        const userId = req.userId;

        const objectQuery = {};
        const { searchParams } = new URL(req.url);
        const page = searchParams.get('page');
        const search = searchParams.get('search');

        if (!userId) {
            return NextResponse.json(
                { error: -1, messange: 'Admin không tônf tại !!!' },
                { status: 401 }
            )
        }
        const getProduct = await showProduct({ userId: userId, page, search });
        return NextResponse.json(
            { error: 0, data: getProduct },
            { status: 201 }
        );
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: -1, message: 'Lỗi Server !!!' },
            { status: 500 }
        );
    }
}

export async function POST(req) {
    const authMiddleware = await middleware(req);

    if (authMiddleware.status !== 200) {
        return NextResponse.json(
            { message: authMiddleware.message },
            { status: authMiddleware.status }
        );
    }

    try {
        const { title, link, status } = await req.json();

        if (!title || !link) {
            return NextResponse.json(
                { error: -1, message: "Vui lòng nhập đầy đủ thông tin !!" },
                { status: 400 }
            );
        }

        const userId = req.userId;
        if (!userId) {
            return NextResponse.json(
                { error: -1, message: "Admin không tồn tại !!!" },
                { status: 400 }
            );
        }

        const created = await createProject({ title, link, status, userId });
        return NextResponse.json(
            {
                error: 0,
                data: created,
            },
            { status: 201 }
        );
    } catch (error) {
        return NextResponse.json(
            {
                error: -1,
                message: error.message,
            },
            { status: 500 }
        );
    }
}
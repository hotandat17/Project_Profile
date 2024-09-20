import { deleteProduct, editProduct } from "@/services/project/serviceProject";
import { NextResponse } from "next/server";
import { middleware } from "../middleware";
export async function DELETE(req, { params }) {
    const auth = await middleware(req)
    if (auth.status == !200) {
        return auth
    }
    try {
        const { id } = params
        const userId = req.userId
        await deleteProduct({ id, userId })
        return NextResponse.json(
            { error: 0, messange: "Xóa thành công !!!!" },
            { status: 200 }
        )
    } catch (error) {

        return NextResponse.json(
            {
                error: -1,
                message: "Id không tồn tại !!!",
            },
            { status: 500 }
        );
    }
}

export async function PUT(req, { params }) {
    const auth = await middleware(req)
    if (auth.status == !200) {
        return auth
    }
    try {
        const { id } = params
        const { title, link, status } = await req.json()
        const userId = req.userId
        const edit = await editProduct({ id, userId: userId, title, link, status })
        return NextResponse.json(
            { error: 0, messange: "Sửa thành công !!!!", data: edit },
            { status: 200 }
        )
    } catch (error) {
        return NextResponse.json(
            {
                error: -1,
                message: "Id không tồn tại !!!",
            },
            { status: 500 }
        );
    }
}
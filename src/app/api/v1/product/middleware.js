import jwt from "jsonwebtoken";
import { User } from "@/models/users";
import { NextResponse, NextRequest } from "next/server";
import { connection } from "../../../../../config/data";

export const middleware = async (req) => {
    await connection();
    const authHeader = req.headers.get("Authorization");
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return { message: "token không tồn tại !!", status: 401 };
    }

    try {
        const decoded = jwt.verify(token, process.env.SECRET);
        const user = await User.findById(decoded._id).select("_id");
        if (!user) {
            return { message: "Người dùng không tồn tại !!", status: 403 };
        }

        req.userId = user._id;

        return { message: "Xác thực thành công", status: 200 };

    } catch (error) {
        console.log('error', error);
        return { message: "token không hợp lệ", status: 500 };
    }
};
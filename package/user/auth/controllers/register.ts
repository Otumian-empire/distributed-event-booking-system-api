import { NextFunction, Response, Request } from "express";

export async function Register(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        //
        return res
            .status(200)
            .json({ message: "User registered successfully" });
    } catch (error) {
        return next(error);
    }
}

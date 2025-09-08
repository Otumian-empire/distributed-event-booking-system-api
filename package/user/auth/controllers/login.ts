import { NextFunction, Response, Request } from "express";

export async function Login(req: Request, res: Response, next: NextFunction) {
    try {
        //
        return res.status(200).json({ message: "User logged in successfully" });
    } catch (error) {
        return next(error);
    }
}

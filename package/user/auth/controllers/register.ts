import { AppConstants } from "@packages/core";
import { NextFunction, Response, Request } from "express";

export async function Register(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const { email, password, firstName, lastName, dateOfBirth } = req.body;
        return res
            .status(AppConstants.STATUS_CODES.SUCCESS)
            .json({ message: "User registered successfully" });
    } catch (error) {
        return next(error);
    }
}

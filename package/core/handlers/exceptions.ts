import { AppConstants } from "../constants";

export class AppError extends Error {
    statusCode: number;

    constructor(
        message: string,
        statusCode = AppConstants.STATUS_CODES.SUCCESS
    ) {
        super(message);
        this.statusCode = statusCode;
        this.name = this.constructor.name;

        // Ensure the stack trace is captured correctly
        Error.captureStackTrace(this, this.constructor);
    }
}

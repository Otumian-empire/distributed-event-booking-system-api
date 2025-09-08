import { Request } from "express";
import jwt from "jsonwebtoken";
import { AppConstants, EnvConstants } from "../constants";
import { hasExpired } from "../functions/util-functions";
import { AppError } from "../handlers/exceptions";
import { AuthUser, IJwtPayload, IJwtTokens } from "./interfaces";

export default class JwtService {
    private static generateJWT(
        payload: AuthUser,
        secret: string,
        ttl: number
    ): string {
        return jwt.sign(payload, secret, {
            expiresIn: ttl,
            issuer: EnvConstants.ISSUER,
            audience: EnvConstants.AUDIENCE,
        });
    }

    /**
     * generateAccessToken
     */
    public static generateAccessToken(user: AuthUser) {
        return JwtService.generateJWT(
            user,
            EnvConstants.JWT_ACCESS_SECRET_USER,
            EnvConstants.JWT_ACCESS_TOKEN_TTL_USER
        );
    }

    public static generateAdminAccessToken(user: AuthUser) {
        return JwtService.generateJWT(
            user,
            EnvConstants.JWT_ACCESS_SECRET_ADMIN,
            EnvConstants.JWT_ACCESS_TOKEN_TTL_ADMIN
        );
    }

    /**
     * use to extract access and refresh token
     * @param req
     * @param key
     * @returns string
     */
    public static extractToken(req: Request, key: string): string {
        const value = req.headers[key] as string;

        if (!value) {
            throw new AppError(
                `${key} not found, on ${req.originalUrl}`,
                AppConstants.STATUS_CODES.UNAUTHORIZED
            );
        }

        return value;
    }

    public static getTokensFromRequest(req: Request): IJwtTokens {
        const accessToken = JwtService.extractToken(
            req,
            AppConstants.TOKEN_KEY.ACCESS_TOKEN
        );

        return {
            accessToken,
        };
    }

    public static verifyToken(token: string, secret: string) {
        const response = jwt.verify(token, secret) as IJwtPayload;
        const { uuid, exp } = response;

        return { uuid, hasExpired: hasExpired(exp ?? 0) };
    }

    public static decodeToken(token: string) {
        return jwt.decode(token) as IJwtPayload;
    }
}

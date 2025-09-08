import { JwtPayload } from "jsonwebtoken";

export interface AuthUser {
    uuid: string;
}

export interface IJwtPayload extends JwtPayload, AuthUser {}

export interface IJwtTokens {
    accessToken: string;
}

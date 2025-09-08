/**
 * For any dependant, read the env via the file path
 */

import path from "node:path";
import { AppConstants } from "./app-constants";
import dotenv from "dotenv";

dotenv.config({
    path: path.resolve(__dirname, "../../../../.env"),
});

export const EnvConstants = {
    // database
    DATABASE_HOST: process.env.DB_HOST ?? AppConstants.DEFAULT_STRING,
    DATABASE_PORT: Number(
        process.env.DB_PORT ?? AppConstants.DEFAULT_DATABASE_PORT
    ),
    DATABASE_USERNAME: process.env.DB_USERNAME ?? AppConstants.DEFAULT_STRING,
    DATABASE_PASSWORD: process.env.DB_PASSWORD ?? AppConstants.DEFAULT_STRING,
    DATABASE_NAME: process.env.DB_NAME ?? AppConstants.DEFAULT_STRING,

    // environment
    isDevelopment: () => process.env.NODE_ENV === AppConstants.DEVELOPMENT_ENV,
    isProduction: () => process.env.NODE_ENV === AppConstants.PRODUCTION_ENV,

    // application ports
    USER_PORT: Number(process.env.USER_PORT ?? AppConstants.DEFAULT_USER_PORT),
    ADMIN_PORT: Number(
        process.env.ADMIN_PORT ?? AppConstants.DEFAULT_ADMIN_PORT
    ),

    // jwt user tokens
    ISSUER: process.env.ISSUER ?? AppConstants.DEFAULT_STRING,
    AUDIENCE: process.env.AUDIENCE ?? AppConstants.DEFAULT_STRING,

    // user jwt tokens
    JWT_ACCESS_SECRET_USER:
        process.env.JWT_ACCESS_SECRET_USER ?? AppConstants.DEFAULT_STRING,
    JWT_ACCESS_TOKEN_TTL_USER: Number(
        process.env.JWT_ACCESS_TOKEN_TTL_USER ?? AppConstants.DEFAULT_JWT_TTL
    ),

    // admin admin tokens
    JWT_ACCESS_SECRET_ADMIN:
        process.env.JWT_ACCESS_SECRET_ADMIN ?? AppConstants.DEFAULT_STRING,
    JWT_ACCESS_TOKEN_TTL_ADMIN: Number(
        process.env.JWT_ACCESS_TOKEN_TTL_ADMIN ?? AppConstants.DEFAULT_JWT_TTL
    ),

    // password hashing rounds - salt rounds
    PASSWORD_HASHING_ROUNDS: Number(
        Number(
            process.env.PASSWORD_HASHING_ROUNDS ??
                AppConstants.PASSWORD_HASHING_ROUNDS
        )
    ),
};

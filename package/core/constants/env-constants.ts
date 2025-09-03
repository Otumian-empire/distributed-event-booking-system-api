/**
 * For any dependant, read the env via the file path
 */

import { AppConstants } from "./app-constants";

export const EnvConstants = {
    DATABASE_HOST: process.env.DB_HOST ?? AppConstants.DEFAULT_STRING,
    DATABASE_PORT: Number(
        process.env.DB_PORT ?? AppConstants.DEFAULT_DATABASE_PORT
    ),
    DATABASE_USERNAME: process.env.DB_USERNAME ?? AppConstants.DEFAULT_STRING,
    DATABASE_PASSWORD: process.env.DB_PASSWORD ?? AppConstants.DEFAULT_STRING,
    DATABASE_NAME: process.env.DB_NAME ?? AppConstants.DEFAULT_STRING,
    isDevelopment: () => process.env.NODE_ENV === AppConstants.DEVELOPMENT_ENV,
    isProduction: () => process.env.NODE_ENV === AppConstants.PRODUCTION_ENV,
};

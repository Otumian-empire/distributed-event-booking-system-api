export const AppConstants = {
    DEVELOPMENT_ENV: "development",
    PRODUCTION_ENV: "production",
    DEFAULT_DATABASE_PORT: 5432,
    DEFAULT_STRING: "",
    DEFAULT_USER_PORT: 3000,
    DEFAULT_ADMIN_PORT: 3001,
    PASSWORD_HASHING_ROUNDS: 10,
    DEFAULT_JWT_TTL: 60 * 60 * 6, // 6 hours

    TOKEN_KEY: {
        ACCESS_TOKEN: "access-token",
    },

    STATUS_CODES: {
        SUCCESS: 200,
        UNAUTHORIZED: 401,
    },
};

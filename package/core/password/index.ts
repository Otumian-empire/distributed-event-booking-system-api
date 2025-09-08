import bcrypt from "bcryptjs";
import { EnvConstants } from "../constants";

export const PasswordService = {
    async hash(rawPassword: string) {
        const salt = await bcrypt.genSalt(EnvConstants.PASSWORD_HASHING_ROUNDS);
        const hash = await bcrypt.hash(rawPassword, salt);

        return hash;
    },
    async compare(rawPassword: string, passwordHash: string) {
        return await bcrypt.compare(rawPassword, passwordHash);
    },
};

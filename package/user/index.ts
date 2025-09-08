import { AppConstants, EnvConstants } from "@packages/core";
import express, { Request, Response, Router } from "express";
import { AppDataSource } from "../database/src";
import auth from "./auth";

const app = express();
const router = Router();

const port = EnvConstants.USER_PORT;

app.use(express.json());

router.get("/", (_req: Request, res: Response) => {
    res.status(AppConstants.STATUS_CODES.SUCCESS).json({
        message: "User service is running",
        success: true,
    });
});

router.use("/auth", auth);

app.use("/api/user", router);

AppDataSource.initialize()
    .then(() => {
        app.listen(port, () => {
            console.log("Database connected successfully");
            console.log(`User service is running on port ${port}`);
        });
    })
    .catch((error) => {
        console.error("Error during Data Source initialization:", error);
    });

export default app;

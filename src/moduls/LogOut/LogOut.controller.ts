import type { NextFunction, Response, Request } from "express";

export class LogOutController {
    logOut = (_req: Request, res: Response, next: NextFunction) => {
        res.clearCookie("token", {
                httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/"
        })
        return res.status(200).json({ message: "loged out", success: true })
    }
}
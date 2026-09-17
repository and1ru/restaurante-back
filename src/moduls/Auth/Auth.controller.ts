import type { Response, Request } from "express";

export class AuthController {
    auth = (req: Request, res: Response) => {
        const { name, role } = req.user!

        const result = { name, role }
        return res.status(200).json({ message: "authenticated", success: true, result })
    }
}
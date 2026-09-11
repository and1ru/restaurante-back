import type { NextFunction, Request, Response } from "express";
import type { DishesService } from "./dishes_admin.service";

export class DishesController {
  constructor(private service: DishesService) {}
  dishes = async (req: Request, res: Response, next: NextFunction) => {
    const userId = req.user?.userId;

    if (!userId) {
      return res.status(401).json({ message: "", success: false });
    }

    try {
      const result = await this.service.dishes(userId);
      return res.status(200).json({ message: "got dishes", success: true, result });
    } catch (error) {
      return next(error);
    }
  };
}

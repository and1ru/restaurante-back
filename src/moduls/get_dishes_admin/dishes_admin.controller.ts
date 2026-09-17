import type { NextFunction, Request, Response } from "express";
import type { DishesService } from "./dishes_admin.service";
import { CustomError } from "../../helper/cutomError";

export class DishesController {
  constructor(private service: DishesService) {}
  dishes = async (req: Request, res: Response, next: NextFunction) => {
    const { branchId, restaurantId } = req.user!;

    if (!branchId) {
      throw new CustomError(400, "A branch assignment is required")
    }

    try {
      const result = await this.service.dishes(branchId, restaurantId);
      return res.status(200).json({ message: "got dishes", success: true, result });
    } catch (error) {
      return next(error);
    }
  };
}
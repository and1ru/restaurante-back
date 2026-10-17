import type { Payload } from "./jwt.payload";

declare global {
  namespace Express {
    interface Request {
      user: {
        userId: number;
        role: Role;
        restaurantId: number
        name: string
        branchId: number | null
      };
    }
  }
}

export { };
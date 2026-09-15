export type Role = "ROOT" | "OWNER" | "ADMIN" | "CASHIER" | "CHEF" | "RECEPTIONIST" | "WAITRESS";

export interface Payload {
    userId: number;
    role: Role;
    restaurantId:number
    name:string
    branchId: number | null
}

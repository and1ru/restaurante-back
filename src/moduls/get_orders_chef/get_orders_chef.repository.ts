import { prisma } from "../../../lib/prisma"

export const OrdersRepository = async (branchId:number) => {
    // necesito obtner todas las orders
    return await prisma.orders.findMany({
        // solo las orders de la branch
        where:{ branch_id:branchId, status:{ in:["PENDING", "COOKING"]} },
        select:{
            id:true,
            status:true,
            date:true,
            Order_dish:{
                select:{
                    id:true,
                    quantity:true,
                    name:true
                }
            }
        },
        orderBy:{
            date: "asc"
        }
    })
}
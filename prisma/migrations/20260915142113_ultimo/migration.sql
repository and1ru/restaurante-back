/*
  Warnings:

  - You are about to drop the column `tables` on the `branches` table. All the data in the column will be lost.
  - You are about to drop the column `branchId` on the `employees` table. All the data in the column will be lost.
  - The values [PENDDING] on the enum `Orders_status` will be removed. If these variants are still used in the database, this will fail.
  - You are about to alter the column `status` on the `reservations` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(2))`.
  - Added the required column `hireDate` to the `Employees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `salary` to the `Employees` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `employees` DROP FOREIGN KEY `Employees_branchId_fkey`;

-- DropIndex
DROP INDEX `Employees_branchId_fkey` ON `employees`;

-- AlterTable
ALTER TABLE `branches` DROP COLUMN `tables`;

-- AlterTable
ALTER TABLE `employees` DROP COLUMN `branchId`,
    ADD COLUMN `hireDate` DATETIME(3) NOT NULL,
    ADD COLUMN `salary` DECIMAL(65, 30) NOT NULL;

-- AlterTable
ALTER TABLE `orders` MODIFY `status` ENUM('PENDING', 'READY', 'DONE', 'COOKING') NOT NULL;

-- AlterTable
ALTER TABLE `reservations` MODIFY `status` ENUM('PENDING', 'CONFIRMED', 'CANCELLED', 'COMPLETED') NOT NULL;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `branch_id` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Users` ADD CONSTRAINT `Users_branch_id_fkey` FOREIGN KEY (`branch_id`) REFERENCES `Branches`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Orders` ADD CONSTRAINT `Orders_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Order_dish` ADD CONSTRAINT `Order_dish_branch_dish_id_fkey` FOREIGN KEY (`branch_dish_id`) REFERENCES `Branch_dishes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

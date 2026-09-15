/*
  Warnings:

  - You are about to drop the column `tables` on the `branches` table. All the data in the column will be lost.
  - The values [PENDDING] on the enum `Orders_status` will be removed. If these variants are still used in the database, this will fail.
  - You are about to alter the column `status` on the `reservations` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(2))`.

*/
-- Move each existing employee's branch assignment to its user before removing
-- the legacy Employees.branchId column.
ALTER TABLE `Users` ADD COLUMN `branch_id` INTEGER NULL;

UPDATE `Users` AS u
INNER JOIN `Employees` AS e ON e.`userId` = u.`id`
SET u.`branch_id` = e.`branchId`;

-- Add the new employee metadata as nullable, backfill legacy rows, then make
-- it required. This keeps the migration applicable to non-empty databases.
ALTER TABLE `Employees`
    ADD COLUMN `hireDate` DATETIME(3) NULL,
    ADD COLUMN `salary` DECIMAL(65, 30) NULL;

UPDATE `Employees`
SET `hireDate` = CURRENT_TIMESTAMP(3), `salary` = 0
WHERE `hireDate` IS NULL OR `salary` IS NULL;

ALTER TABLE `Employees`
    MODIFY `hireDate` DATETIME(3) NOT NULL,
    MODIFY `salary` DECIMAL(65, 30) NOT NULL;

-- DropForeignKey
ALTER TABLE `Employees` DROP FOREIGN KEY `Employees_branchId_fkey`;

-- DropIndex
DROP INDEX `Employees_branchId_fkey` ON `Employees`;

-- AlterTable
ALTER TABLE `branches` DROP COLUMN `tables`;

-- AlterTable
ALTER TABLE `Employees` DROP COLUMN `branchId`;

-- AlterTable
UPDATE `Orders` SET `status` = 'PENDING' WHERE `status` = 'PENDDING';
ALTER TABLE `Orders` MODIFY `status` ENUM('PENDING', 'READY', 'DONE', 'COOKING') NOT NULL;

-- AlterTable
ALTER TABLE `reservations` MODIFY `status` ENUM('PENDING', 'CONFIRMED', 'CANCELLED', 'COMPLETED') NOT NULL;

-- AlterTable
-- AddForeignKey
ALTER TABLE `Users` ADD CONSTRAINT `Users_branch_id_fkey` FOREIGN KEY (`branch_id`) REFERENCES `Branches`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Orders` ADD CONSTRAINT `Orders_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Order_dish` ADD CONSTRAINT `Order_dish_branch_dish_id_fkey` FOREIGN KEY (`branch_dish_id`) REFERENCES `Branch_dishes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

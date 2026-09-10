/*
  Warnings:

  - You are about to drop the column `description` on the `dishes` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `dishes` DROP COLUMN `description`;

-- AddForeignKey
ALTER TABLE `Branch_dishes` ADD CONSTRAINT `Branch_dishes_dish_id_fkey` FOREIGN KEY (`dish_id`) REFERENCES `Dishes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

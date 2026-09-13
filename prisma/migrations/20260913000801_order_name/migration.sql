/*
  Warnings:

  - Added the required column `name` to the `Order_dish` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `order_dish` ADD COLUMN `name` VARCHAR(191) NOT NULL;

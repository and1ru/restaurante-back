/*
  Warnings:

  - You are about to drop the column `user_id` on the `order_dish` table. All the data in the column will be lost.
  - Added the required column `user_id` to the `Orders` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `order_dish` DROP COLUMN `user_id`;

-- AlterTable
ALTER TABLE `orders` ADD COLUMN `user_id` INTEGER NOT NULL;

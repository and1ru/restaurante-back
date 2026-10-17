/*
  Warnings:

  - You are about to drop the column `description` on the `branch_dishes` table. All the data in the column will be lost.
  - You are about to drop the column `ingredients` on the `branch_dishes` table. All the data in the column will be lost.
  - Added the required column `description` to the `Dishes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `branch_dishes` DROP COLUMN `description`,
    DROP COLUMN `ingredients`;

-- AlterTable
ALTER TABLE `dishes` ADD COLUMN `description` VARCHAR(191) NOT NULL;

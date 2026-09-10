/*
  Warnings:

  - Added the required column `description` to the `Dishes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `dishes` ADD COLUMN `description` VARCHAR(191) NOT NULL;

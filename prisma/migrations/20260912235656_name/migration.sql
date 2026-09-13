/*
  Warnings:

  - Added the required column `name` to the `Branch_dishes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `branch_dishes` ADD COLUMN `name` VARCHAR(191) NOT NULL;

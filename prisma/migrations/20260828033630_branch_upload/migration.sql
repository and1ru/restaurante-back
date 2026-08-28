/*
  Warnings:

  - Added the required column `country` to the `Branches` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tables` to the `Branches` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `branches` ADD COLUMN `country` VARCHAR(191) NOT NULL,
    ADD COLUMN `tables` INTEGER NOT NULL;

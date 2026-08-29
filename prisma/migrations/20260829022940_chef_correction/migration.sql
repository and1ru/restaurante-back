/*
  Warnings:

  - The values [CHEFF] on the enum `Users_role` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `users` MODIFY `role` ENUM('ROOT', 'ADMIN', 'OWNER', 'CASHIER', 'CHEF', 'RECEPTIONIST') NOT NULL;

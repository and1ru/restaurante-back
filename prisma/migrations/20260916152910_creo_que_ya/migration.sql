/*
  Warnings:

  - A unique constraint covering the columns `[restaurant_id,name]` on the table `Categories` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `description` to the `Branch_dishes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ingredients` to the `Branch_dishes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `branch_dishes` ADD COLUMN `description` VARCHAR(191) NOT NULL,
    ADD COLUMN `ingredients` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Categories_restaurant_id_name_key` ON `Categories`(`restaurant_id`, `name`);

-- RenameIndex
ALTER TABLE `branches` RENAME INDEX `Branches_restaurant_id_fkey` TO `Branches_restaurant_id_idx`;

-- RenameIndex
ALTER TABLE `users` RENAME INDEX `Users_branch_id_fkey` TO `Users_branch_id_idx`;

-- RenameIndex
ALTER TABLE `users` RENAME INDEX `Users_restaurant_id_fkey` TO `Users_restaurant_id_idx`;

/*
  Warnings:

  - A unique constraint covering the columns `[dish_id,branch_id]` on the table `Branch_dishes` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Branch_dishes_dish_id_branch_id_key` ON `Branch_dishes`(`dish_id`, `branch_id`);

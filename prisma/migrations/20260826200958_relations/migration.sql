/*
  Warnings:

  - The primary key for the `branch_dishes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `branch_dish_id` on the `branch_dishes` table. All the data in the column will be lost.
  - You are about to drop the column `dish_price` on the `branch_dishes` table. All the data in the column will be lost.
  - The primary key for the `branches` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `branch_address` on the `branches` table. All the data in the column will be lost.
  - You are about to drop the column `branch_city` on the `branches` table. All the data in the column will be lost.
  - You are about to drop the column `branch_id` on the `branches` table. All the data in the column will be lost.
  - You are about to drop the column `branch_name` on the `branches` table. All the data in the column will be lost.
  - The primary key for the `categories` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `category_id` on the `categories` table. All the data in the column will be lost.
  - You are about to drop the column `category_name` on the `categories` table. All the data in the column will be lost.
  - The primary key for the `dishes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `dish_id` on the `dishes` table. All the data in the column will be lost.
  - You are about to drop the column `dish_img_id` on the `dishes` table. All the data in the column will be lost.
  - You are about to drop the column `dish_img_url` on the `dishes` table. All the data in the column will be lost.
  - You are about to drop the column `dish_name` on the `dishes` table. All the data in the column will be lost.
  - The primary key for the `order_dish` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `order_dish_id` on the `order_dish` table. All the data in the column will be lost.
  - The primary key for the `orders` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `order_date` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `order_id` on the `orders` table. All the data in the column will be lost.
  - The primary key for the `restaurants` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `restaurant_id` on the `restaurants` table. All the data in the column will be lost.
  - You are about to drop the column `restaurant_name` on the `restaurants` table. All the data in the column will be lost.
  - The primary key for the `users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `company_id` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `Users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `branch_id` to the `Branch_dishes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `Branch_dishes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Branch_dishes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `address` to the `Branches` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `Branches` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `Branches` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Branches` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `Categories` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Categories` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `Dishes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image_id` to the `Dishes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image_url` to the `Dishes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Dishes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `Order_dish` table without a default value. This is not possible if the table is not empty.
  - Added the required column `branch_id` to the `Orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date` to the `Orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `Orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `Restaurants` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Restaurants` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `restaurant_id` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `branch_dishes` DROP PRIMARY KEY,
    DROP COLUMN `branch_dish_id`,
    DROP COLUMN `dish_price`,
    ADD COLUMN `branch_id` INTEGER NOT NULL,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `price` DECIMAL(65, 30) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `branches` DROP PRIMARY KEY,
    DROP COLUMN `branch_address`,
    DROP COLUMN `branch_city`,
    DROP COLUMN `branch_id`,
    DROP COLUMN `branch_name`,
    ADD COLUMN `address` VARCHAR(191) NOT NULL,
    ADD COLUMN `city` VARCHAR(191) NOT NULL,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `categories` DROP PRIMARY KEY,
    DROP COLUMN `category_id`,
    DROP COLUMN `category_name`,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `dishes` DROP PRIMARY KEY,
    DROP COLUMN `dish_id`,
    DROP COLUMN `dish_img_id`,
    DROP COLUMN `dish_img_url`,
    DROP COLUMN `dish_name`,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `image_id` VARCHAR(191) NOT NULL,
    ADD COLUMN `image_url` VARCHAR(191) NOT NULL,
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `order_dish` DROP PRIMARY KEY,
    DROP COLUMN `order_dish_id`,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `orders` DROP PRIMARY KEY,
    DROP COLUMN `order_date`,
    DROP COLUMN `order_id`,
    ADD COLUMN `branch_id` INTEGER NOT NULL,
    ADD COLUMN `date` DATETIME(3) NOT NULL,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `restaurants` DROP PRIMARY KEY,
    DROP COLUMN `restaurant_id`,
    DROP COLUMN `restaurant_name`,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `users` DROP PRIMARY KEY,
    DROP COLUMN `company_id`,
    DROP COLUMN `user_id`,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `restaurant_id` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);

-- CreateIndex
CREATE UNIQUE INDEX `Users_email_key` ON `Users`(`email`);

-- AddForeignKey
ALTER TABLE `Users` ADD CONSTRAINT `Users_restaurant_id_fkey` FOREIGN KEY (`restaurant_id`) REFERENCES `Restaurants`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Branches` ADD CONSTRAINT `Branches_restaurant_id_fkey` FOREIGN KEY (`restaurant_id`) REFERENCES `Restaurants`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Categories` ADD CONSTRAINT `Categories_restaurant_id_fkey` FOREIGN KEY (`restaurant_id`) REFERENCES `Restaurants`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Dishes` ADD CONSTRAINT `Dishes_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `Categories`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Dishes` ADD CONSTRAINT `Dishes_restaurant_id_fkey` FOREIGN KEY (`restaurant_id`) REFERENCES `Restaurants`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Branch_dishes` ADD CONSTRAINT `Branch_dishes_branch_id_fkey` FOREIGN KEY (`branch_id`) REFERENCES `Branches`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Orders` ADD CONSTRAINT `Orders_branch_id_fkey` FOREIGN KEY (`branch_id`) REFERENCES `Branches`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Order_dish` ADD CONSTRAINT `Order_dish_order_id_fkey` FOREIGN KEY (`order_id`) REFERENCES `Orders`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

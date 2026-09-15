-- CreateTable
CREATE TABLE `Restaurants` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `role` ENUM('ROOT', 'ADMIN', 'OWNER', 'CASHIER', 'CHEF', 'RECEPTIONIST', 'WAITRESS') NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `restaurant_id` INTEGER NOT NULL,

    UNIQUE INDEX `Users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Branches` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `country` VARCHAR(191) NOT NULL,
    `tables` INTEGER NOT NULL,
    `restaurant_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Tables` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `capacity` INTEGER NOT NULL,
    `branch_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Employees` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `branchId` INTEGER NOT NULL,

    UNIQUE INDEX `Employees_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Categories` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `restaurant_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Dishes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `image_url` VARCHAR(191) NOT NULL,
    `image_id` VARCHAR(191) NOT NULL,
    `category_id` INTEGER NOT NULL,
    `restaurant_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Branch_dishes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `branch_id` INTEGER NOT NULL,
    `dish_id` INTEGER NOT NULL,
    `price` DECIMAL(65, 30) NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Branch_dishes_dish_id_branch_id_key`(`dish_id`, `branch_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Orders` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `total` DECIMAL(65, 30) NOT NULL,
    `status` ENUM('PENDDING', 'READY', 'DONE', 'COOKING') NOT NULL,
    `date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `branch_id` INTEGER NOT NULL,
    `user_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Order_dish` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `branch_dish_id` INTEGER NOT NULL,
    `order_id` INTEGER NOT NULL,
    `quantity` INTEGER NOT NULL,
    `subtotal` DECIMAL(65, 30) NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Users` ADD CONSTRAINT `Users_restaurant_id_fkey` FOREIGN KEY (`restaurant_id`) REFERENCES `Restaurants`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Branches` ADD CONSTRAINT `Branches_restaurant_id_fkey` FOREIGN KEY (`restaurant_id`) REFERENCES `Restaurants`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Tables` ADD CONSTRAINT `Tables_branch_id_fkey` FOREIGN KEY (`branch_id`) REFERENCES `Branches`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Employees` ADD CONSTRAINT `Employees_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Employees` ADD CONSTRAINT `Employees_branchId_fkey` FOREIGN KEY (`branchId`) REFERENCES `Branches`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Categories` ADD CONSTRAINT `Categories_restaurant_id_fkey` FOREIGN KEY (`restaurant_id`) REFERENCES `Restaurants`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Dishes` ADD CONSTRAINT `Dishes_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `Categories`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Dishes` ADD CONSTRAINT `Dishes_restaurant_id_fkey` FOREIGN KEY (`restaurant_id`) REFERENCES `Restaurants`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Branch_dishes` ADD CONSTRAINT `Branch_dishes_dish_id_fkey` FOREIGN KEY (`dish_id`) REFERENCES `Dishes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Branch_dishes` ADD CONSTRAINT `Branch_dishes_branch_id_fkey` FOREIGN KEY (`branch_id`) REFERENCES `Branches`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Orders` ADD CONSTRAINT `Orders_branch_id_fkey` FOREIGN KEY (`branch_id`) REFERENCES `Branches`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Order_dish` ADD CONSTRAINT `Order_dish_order_id_fkey` FOREIGN KEY (`order_id`) REFERENCES `Orders`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

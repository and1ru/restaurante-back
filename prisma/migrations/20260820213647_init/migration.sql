-- CreateTable
CREATE TABLE `Restaurants` (
    `restaurant_id` INTEGER NOT NULL AUTO_INCREMENT,
    `restaurant_name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`restaurant_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Users` (
    `user_id` INTEGER NOT NULL AUTO_INCREMENT,
    `role` ENUM('ROOT', 'ADMIN', 'OWNER', 'CASHIER', 'CHEFF') NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `company_id` INTEGER NOT NULL,

    PRIMARY KEY (`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Branches` (
    `branch_id` INTEGER NOT NULL AUTO_INCREMENT,
    `branch_name` VARCHAR(191) NOT NULL,
    `branch_address` VARCHAR(191) NOT NULL,
    `branch_city` VARCHAR(191) NOT NULL,
    `restaurant_id` INTEGER NOT NULL,

    PRIMARY KEY (`branch_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Categories` (
    `category_id` INTEGER NOT NULL AUTO_INCREMENT,
    `category_name` VARCHAR(191) NOT NULL,
    `restaurant_id` INTEGER NOT NULL,

    PRIMARY KEY (`category_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Dishes` (
    `dish_id` INTEGER NOT NULL AUTO_INCREMENT,
    `dish_name` VARCHAR(191) NOT NULL,
    `dish_img_url` VARCHAR(191) NOT NULL,
    `dish_img_id` VARCHAR(191) NOT NULL,
    `category_id` INTEGER NOT NULL,
    `restaurant_id` INTEGER NOT NULL,

    PRIMARY KEY (`dish_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Branch_dishes` (
    `branch_dish_id` INTEGER NOT NULL AUTO_INCREMENT,
    `dish_id` INTEGER NOT NULL,
    `dish_price` DECIMAL(65, 30) NOT NULL,

    PRIMARY KEY (`branch_dish_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Orders` (
    `order_id` INTEGER NOT NULL AUTO_INCREMENT,
    `total` DECIMAL(65, 30) NOT NULL,
    `status` ENUM('PENDDING', 'DONE') NOT NULL,
    `order_date` DATETIME(3) NOT NULL,

    PRIMARY KEY (`order_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Order_dish` (
    `order_dish_id` INTEGER NOT NULL AUTO_INCREMENT,
    `branch_dish_id` INTEGER NOT NULL,
    `order_id` INTEGER NOT NULL,
    `quantity` INTEGER NOT NULL,
    `subtotal` DECIMAL(65, 30) NOT NULL,

    PRIMARY KEY (`order_dish_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

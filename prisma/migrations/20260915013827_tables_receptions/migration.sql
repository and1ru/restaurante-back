-- CreateTable
CREATE TABLE `Schedule` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `branch_id` INTEGER NOT NULL,
    `opening_time` VARCHAR(191) NOT NULL,
    `closing_time` VARCHAR(191) NOT NULL,
    `interval` INTEGER NOT NULL,

    UNIQUE INDEX `Schedule_branch_id_key`(`branch_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Reservations` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `branch_id` INTEGER NOT NULL,
    `table_id` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `people` INTEGER NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `status` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Schedule` ADD CONSTRAINT `Schedule_branch_id_fkey` FOREIGN KEY (`branch_id`) REFERENCES `Branches`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Reservations` ADD CONSTRAINT `Reservations_table_id_fkey` FOREIGN KEY (`table_id`) REFERENCES `Tables`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Reservations` ADD CONSTRAINT `Reservations_branch_id_fkey` FOREIGN KEY (`branch_id`) REFERENCES `Branches`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

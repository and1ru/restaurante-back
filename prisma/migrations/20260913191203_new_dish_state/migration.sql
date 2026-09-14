-- AlterTable
ALTER TABLE `orders` MODIFY `status` ENUM('PENDDING', 'READY', 'DONE', 'COOKING') NOT NULL;

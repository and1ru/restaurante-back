-- AlterTable
ALTER TABLE `orders` MODIFY `status` ENUM('PENDDING', 'READY', 'DONE') NOT NULL;

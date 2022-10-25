/*
  Warnings:

  - You are about to drop the column `calories` on the `inventory` table. All the data in the column will be lost.
  - You are about to drop the column `expiry` on the `inventory` table. All the data in the column will be lost.
  - You are about to drop the column `packet_content` on the `inventory` table. All the data in the column will be lost.
  - You are about to drop the column `packet_type` on the `inventory` table. All the data in the column will be lost.
  - You are about to drop the column `quantity` on the `inventory` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "inventory" DROP COLUMN "calories",
DROP COLUMN "expiry",
DROP COLUMN "packet_content",
DROP COLUMN "packet_type",
DROP COLUMN "quantity";

-- CreateTable
CREATE TABLE "water" (
    "id" TEXT NOT NULL,
    "type" TEXT,
    "inventoryId" TEXT,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "water_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "food" (
    "id" TEXT NOT NULL,
    "type" TEXT,
    "packet_content" TEXT NOT NULL,
    "calories" INTEGER NOT NULL,
    "expiry" TIMESTAMP(3) NOT NULL,
    "inventoryId" TEXT,

    CONSTRAINT "food_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "water" ADD CONSTRAINT "water_inventoryId_fkey" FOREIGN KEY ("inventoryId") REFERENCES "inventory"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "food" ADD CONSTRAINT "food_inventoryId_fkey" FOREIGN KEY ("inventoryId") REFERENCES "inventory"("id") ON DELETE SET NULL ON UPDATE CASCADE;

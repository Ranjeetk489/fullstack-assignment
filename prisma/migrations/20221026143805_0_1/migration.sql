-- CreateTable
CREATE TABLE "inventory" (
    "id" TEXT NOT NULL,

    CONSTRAINT "inventory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "water" (
    "id" TEXT NOT NULL,
    "type" TEXT DEFAULT 'Water',
    "inventoryId" TEXT,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "water_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "food" (
    "id" TEXT NOT NULL,
    "type" TEXT DEFAULT 'Food',
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

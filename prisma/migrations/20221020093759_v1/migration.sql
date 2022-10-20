-- CreateTable
CREATE TABLE "inventory" (
    "id" TEXT NOT NULL,
    "packet_type" TEXT[] DEFAULT ARRAY['food', 'water']::TEXT[],
    "packet_content" TEXT NOT NULL,
    "calories" INTEGER NOT NULL,
    "expiry" TIMESTAMP(3) NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "inventory_pkey" PRIMARY KEY ("id")
);

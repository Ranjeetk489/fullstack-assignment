import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../utils/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const inventoryData = await prisma.inventory.findMany({
      include: { food: true, water: true },
    });
    res.status(200).json({ data: inventoryData });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "Failed to get data" });
  }
}

import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../utils/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { foodData, waterData } = req.body;
    for (let item of foodData) {
      item["id"] = item["Food Id"];
      item["packet_content"] = item["Packet Content"];
      item["calories"] = Number(item["Calories"]);
      item["expiry"] = new Date(item["Expiry Date"]);
      delete item["Food Id"];
      delete item["Packet Content"];
      delete item["Calories"];
      delete item["Expiry Date"];
    }
    for (let item of waterData) {
      item["id"] = item["Water Id"];
      item["quantity"] = Number(item["Quantity"]);
      delete item["Water Id"];
      delete item["Quantity"];
    }
    console.log(foodData, waterData);
    await prisma.inventory.update({
      //? can be modified to fetch inventory id's and update selective entry
      where: { id: "cl9pro5ss0000i0yetddyxkfb" },
      data: {
        food: {
          createMany: {
            data: foodData,
          },
        },
        water: {
          createMany: {
            data: waterData,
          },
        },
      },
    });
    res
      .status(200)
      .json({ status: "Inventory Updated successfully", code: 200 });
    // @ts-ignore
  } catch (error) {
    console.log(error);
    //? handle different error cases
    res.status(409).json({ status: "Inventory updation failed", code: 409 });
  }
}

import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../utils/prisma";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const {foodData, waterData} = req.body;
    console.log(foodData);
    // const res = prisma.food.create({
    //   data: {
    //     id: "F10",
    //     packet_content: "milk",
    //     calories: 1500,
    //     expiry: "12/04/2023",
    //   },
    // });
    let res = "res";
    console.log(res);
  } catch (err) {
    console.log(err);
  }
  res.status(200).json({ name: "addRation" });
}

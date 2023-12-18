import type { NextApiRequest, NextApiResponse } from "next";
import { promises as fs } from "fs";
import { crypto } from "../../../data/crypto";

type ResponseData = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  // async function getJSONData() {
  //   const parsedData = JSON.stringify(crypto);
  //   return parsedData;
  // }

  // const data = await getJSONData();
  res.status(200).json(crypto);
}

import type { NextApiRequest, NextApiResponse } from "next";
import { promises as fs } from "fs";

type ResponseData = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const dataPath = "data/crypto.json"; // Path to your JSON file
  async function getJSONData() {
    const fileContent = await fs.readFile(dataPath, "utf8");
    const parsedData = JSON.parse(fileContent);
    return parsedData;
  }

  const data = await getJSONData();
  res.status(200).json(data);
}

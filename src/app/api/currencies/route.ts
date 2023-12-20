import { crypto } from "../../../../data/crypto";

export async function GET() {
  // const response = await fetch(
  //  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false&locale=en&x_cg_demo_api_key=${process.env.COINGECKO_API_KEY}`,
  //  { cache: "force-cache", next: { revalidate: 600 } }
  // );

  // const data = await response.json();

  // if (data?.status?.error_code === 429) {
    return Response.json({ data: crypto });
  // }

  // return Response.json({ data });
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

// refactor this
// add all the fields
//
// type Memes = {
//   data: Data[];
// };
export type Memes = {
  id: string;
  name: string;
  url: string;
  width: number;
  height: number;
  box_count: number;
  captions: number;
};

export type Resp = {
  data: {
    memes: Memes[];
  };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Memes[]>
) {
  // refactor to axios
  console.log("HI");
  const resp = await axios.get(`https://api.imgflip.com/get_memes`);
  //console.log(resp.data, "Hi Axios");
  res.status(200).json(resp.data);
}

// npm i axios

// netlify

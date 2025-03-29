import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const response = await fetch('https://api.imgflip.com/get_memes');
    const memes = await response.json(); // Extract JSON properly
    res.status(200).json({ data: memes.data.memes });
  } catch (error: unknown) {
    let errorMsg = 'Something went wrong'

    if (error instanceof Error) {
      errorMsg = error.message
    }
    console.log('error')
    res.status(500).json({ error: errorMsg })
  }
}

import { NextApiRequest, NextApiResponse } from "next";
import prismadb from '../../../lib/prismadb';
import serverAuth from "../../../lib/serverAuth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'GET') {
      return res.status(405).end();
    }
    await serverAuth(req, res);
    if (req.query.category && typeof req.query.category === 'string' ) {
        let category = req.query.category
        const categoryMovies = await prismadb.movie.findMany({
        where:{
          genre:category
        }
      });
      return res.status(200).json(categoryMovies);
    }
  } catch (error) {
    console.log({ error })
    return res.status(500).end();
  }
}

import { NextApiRequest, NextApiResponse } from "next";
import prismadb from '../../../lib/prismadb'
import serverAuth from "../../../lib/serverAuth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'GET') {
      return res.status(405).end();
    }

    await serverAuth(req, res);

    const { category } = req.query;

    if (typeof category !== 'string') {
      throw new Error('Invalid Category');
    }

    if (!category) {
      throw new Error('Missing Id');
    }

    const movies = await prismadb.movie.findMany({
      where: {
        genre: category
      }
    });

    return res.status(200).json(movies);
  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
}

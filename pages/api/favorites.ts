import { NextApiRequest, NextApiResponse } from "next";

import prismadb from '../../lib/prismadb'
import serverAuth from "../../lib/serverAuth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {

    //limit route to get method
    if (req.method !== 'GET') {
      return res.status(405).end();
    }

    //find current user to get his favorites
    const { currentUser } = await serverAuth(req, res);

    //get the favorites list for the user
    const favoritedMovies = await prismadb.movie.findMany({
      where: {
        id: {
          in: currentUser?.favoriteIds,
        }
      }
    });

    return res.status(200).json(favoritedMovies);
  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
}

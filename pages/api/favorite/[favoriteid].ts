import { NextApiRequest, NextApiResponse } from "next";
import { without } from "lodash";

import prismadb from '../../../lib/prismadb';
import serverAuth from "../../../lib/serverAuth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    //get fav id from API
    const favoriteid = req.query.favoriteid;
    //check if its valid fav id
    if (typeof favoriteid === 'string') {
            const existingMovie = await prismadb.movie.findUnique({
                where: {
                    id: favoriteid,
                }
            });
    // if its not valid
    if (!existingMovie) {
    throw new Error('Invalid ID');
    }
    try {
    // for post type method, add
    if (req.method === 'POST') {
    const { currentUser } = await serverAuth(req, res);
      
    const user = await prismadb.user.update({
        where: {
          email: currentUser.email || '',
        },
        data: {
          favoriteIds: {
            push: favoriteid
          }
        }
      });
  
      return res.status(200).json(user);
    }

    if (req.method === 'DELETE') {
      const { currentUser } = await serverAuth(req, res);
      let updateduserFavoriteIds 
      const userFavoriteIds = currentUser.favoriteIds;
      if (userFavoriteIds.includes(favoriteid)) {
        updateduserFavoriteIds = userFavoriteIds.filter(i=>i!=favoriteid)

      }

      const updatedUser = await prismadb.user.update({
        where: {
          email: currentUser.email || '',
        },
        data: {
          favoriteIds: updateduserFavoriteIds,
        }
      });

      return res.status(200).json(updatedUser);
    }
    
    return res.status(405).end();
  } catch (error) {
    console.log(error);

    return res.status(500).end();
  }
      }
else{
    return res.status(500).end();

}
}
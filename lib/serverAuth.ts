import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";

import prismadb from './prismadb';
import { authOptions } from "@/pages/api/auth/[...nextauth]";

const serverAuth = async (req: NextApiRequest, res: NextApiResponse) => {
    
    //getSession does not have all fields
    const session = await getServerSession({req,res}, authOptions);

    //if session does not exists
    if (!session?.user?.email) {
        throw new Error('Not signed in');
    }

      const currentUser = await prismadb.user.findUnique({
        where: {
            email: session.user.email,
        }
    });
  
    if (!currentUser) {
        throw new Error('Not signed in');
    }

  return { currentUser };
}

export default serverAuth;

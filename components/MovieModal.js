import Link from 'next/link';
import React from 'react'
import { AiOutlinePlus, AiOutlineLike, AiOutlineClose } from "react-icons/ai";
import EpisodeList from './EpisodeList';
import {GrClose} from 'react-icons/gr'

const epi = [
  {
    pic: "https://www.denofgeek.com/wp-content/uploads/2022/03/Peaky-Blinders-3-6-Tommy-and-Lizzie.jpg?fit=1200%2C675",
    dur: 56,
  },
  {
    pic: "https://occ-0-1722-1723.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABcTmnLi0XFKHu0XLByVqHMzXeWchS7Tj25R04m67DMSiA6gBRydPN4ZOE4qFMZYkT1Bflv3eDKh-0MtstAxYpVxV5fTrSvm0USajpM9xXjtDDeLWTw9n374I.jpg?r=c76",
    dur: 52,
  },
  {
    pic: "https://decider.com/wp-content/uploads/2014/10/peaky-blinders-episode-4-recap.png",
    dur: 50,
  },
  {
    pic: "https://occ-0-1722-1723.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABZUcbxChnZKvn0qb0IbDqgY-gg2zi1i9_Cp4OGlmZaxe7jeA_wQKtHLvlanT23EJFTFwDbr0yfLBaSabYKRfrmme9fL9Ei61-W1KqSKQkYksXeOJJYcg2pMj.jpg?r=b69",
    dur: 44,
  },
  {
    pic: "https://i.pinimg.com/736x/70/70/2e/70702e91c7c207f956015b4bc3d9913a.jpg",
    dur: 59,
  },
  {
    pic: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/0cd86197b57cd134ac5fe7f2faba55fffe503cdc2a91835a98e288d13ddb0f24._SX1080_.jpg",
    dur: 51,
  },
];

export default function MovieModal({item,toggleModal}) {
  return (
    <div className="fixed hide-scroll-bar z-30 min-w-full top-0 h-full bg-black bg-opacity-70 overflow-y-auto pt-40 md:py-20 transition-all duration-500 ease-in-out delay-150 ">
      <div className="w-100  md:w-3/4 bg-black mx-auto">
        <div className= "relative  md:block bg-white">
          <img
            src="https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQeZp1pNAwzk6XOx_qVpTZTJcbAcevExM4pJhzneSs35brtaZZgy5Xjwy2RG1ggDMsZ7xwV1ZWcE5va7OXEBV5Phh9xILQr1J9TStKAiyMJbYNS8o49P3Nf7wJ5YYjwW55ZSFtLWermpxnRDN8zWCRZKjd_0.jpg?r=f7e"
            width="100%"
          />
          <div className="absolute top-0 min-w-full min-h-full opacity-50 bg-gradient"></div>
          <div className="absolute bottom-0 md:bottom-10  p-4 md:p-10 ">
            <div className="md:mb-5">
              <h1 className="md:text-4xl">PEAKY BLINDERS</h1>
            </div>
            <div className="flex justify-start">
              <Link href="/user/play">
                  Play
              </Link>
              <button className="rounded-lg md:p-3 p-1 bg-white mr-2 md:mr-5  ">
                <AiOutlinePlus className="text-xs md:text-lg text-black" />
              </button>
              <button className="rounded-lg md:p-3 p-1 bg-white ">
                <AiOutlineLike className="text-xs md:text-lg text-black" />
              </button>
            </div>
          </div>
          <div className="absolute right-5 top-5">
            <button
              className="p-2 md:p-4 rounded-full bg-white"
              onClick={() => toggleModal()}
            >
              <GrClose className="text-xs md:text-2xl" />
            </button>
          </div>
        </div>
        <div className="w-100 text-white p-10 ">
          <div className="flex-col md:flex ">
            <div className="w-100 md:w-1/2">
              <h4 className="my-5 font-light">
                <span className="text-green-500 font-bold">98% match</span> 2022
                6 Seasons
              </h4>
              <p className="font-bold my-5">#1 in Shows today</p>
              <p className="my-5 text-sm">
                {`Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.`}
              </p>
            </div>
            <div className="w-100 md:w-1/2">
              <p className="my-5">
                <span className="text-gray-400">Cast :</span> Cillian Murphy,
                Sam Neil, Helen McCrory, Tom Hardy
              </p>
              <p className="my-5">
                <span className="text-gray-400">Cast :</span> Crime TV shows,
                Britsh, Period Places
              </p>
              <p className="my-5">
                <span className="text-gray-400">This show is :</span> Violent
              </p>
            </div>
          </div>
        </div>
        <div className="w-100  px-10 py-5">
          <div className="py-5">
            <h1 className="text-4xl">Episodes</h1>
          </div>
          {epi.map((item, index) => (
            <EpisodeList key={index} index={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

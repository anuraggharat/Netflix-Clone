import React from "react";
import Link from "next/link";
import MovieCard from "../../components/MovieCard";


const data = [
  {
    id: 1,
    pic: "https://www.denofgeek.com/wp-content/uploads/2021/11/WebStory-Hellbound-review-netflix.jpeg",
  },
  {
    id: 2,
    pic: "https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/sixnpcoput3n9k8e_1637743479.jpeg",
  },
  {
    id: 3,
    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtxvuAcOzXHOdKWgFuxeS6p_kEv7vauMhgjXu-PrV4DZx39GiSmlvrhZUNYqLuKFSyXSo&usqp=CAU",
  },
  {
    id: 4,
    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY2GqZSYGdam6BjJEpNe6OhFN1hKiGs0qecSDJf4rkAqwiBN9JDBxp4QWUBnTeqN1dGak&usqp=CAU",
  },
  {
    id: 5,
    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRTb__WfkBmswYEmTjV8rIVPiY86tS34nJUrZhZkM4lnlmNSBNi4XnytCsJmZznLTmcw4&usqp=CAU",
  },
  {
    id: 6,
    pic: "https://wallpaperaccess.com/full/1087736.jpg",
  },
];

const data1 = [
  {
    id: 1,
    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVx9ZpyDDEC3kq5uFnSF_dEr6aKQK9brxEcg&usqp=CAU",
  },
  {
    id: 2,
    pic: "https://www.thehindu.com/entertainment/movies/s43rl1/article26613110.ece/alternates/FREE_1200/Delhi-Crime-7",
  },
  {
    id: 3,
    pic: "https://st1.latestly.com/wp-content/uploads/2021/12/Aranyak-On-Netflix.jpg",
  },
  {
    id: 4,
    pic: "https://images.hindustantimes.com/img/2021/09/23/550x309/kota_factory_season_2_review_1632409742136_1632409761280.jpg",
  },
  {
    id: 5,
    pic: "https://images.indianexpress.com/2022/03/83-movie-ott-release-1200.jpg",
  },
  {
    id: 6,
    pic: "https://i.dawn.com/large/2021/10/616561fec1d32.jpg",
  },
];

const data2 = [
  {
    id: 1,
    pic: "https://www.denofgeek.com/wp-content/uploads/2021/11/WebStory-Hellbound-review-netflix.jpeg",
  },
  {
    id: 2,
    pic: "https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/sixnpcoput3n9k8e_1637743479.jpeg",
  },
  {
    id: 3,
    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtxvuAcOzXHOdKWgFuxeS6p_kEv7vauMhgjXu-PrV4DZx39GiSmlvrhZUNYqLuKFSyXSo&usqp=CAU",
  },
  {
    id: 4,
    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY2GqZSYGdam6BjJEpNe6OhFN1hKiGs0qecSDJf4rkAqwiBN9JDBxp4QWUBnTeqN1dGak&usqp=CAU",
  },
  {
    id: 5,
    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRTb__WfkBmswYEmTjV8rIVPiY86tS34nJUrZhZkM4lnlmNSBNi4XnytCsJmZznLTmcw4&usqp=CAU",
  },
  {
    id: 6,
    pic: "https://wallpaperaccess.com/full/1087736.jpg",
  },
];

const data3 = [
  {
    id: 1,
    pic: "https://www.denofgeek.com/wp-content/uploads/2021/11/WebStory-Hellbound-review-netflix.jpeg",
  },
  {
    id: 2,
    pic: "https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/sixnpcoput3n9k8e_1637743479.jpeg",
  },
  {
    id: 3,
    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtxvuAcOzXHOdKWgFuxeS6p_kEv7vauMhgjXu-PrV4DZx39GiSmlvrhZUNYqLuKFSyXSo&usqp=CAU",
  },
  {
    id: 4,
    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY2GqZSYGdam6BjJEpNe6OhFN1hKiGs0qecSDJf4rkAqwiBN9JDBxp4QWUBnTeqN1dGak&usqp=CAU",
  },
  {
    id: 5,
    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRTb__WfkBmswYEmTjV8rIVPiY86tS34nJUrZhZkM4lnlmNSBNi4XnytCsJmZznLTmcw4&usqp=CAU",
  },
  {
    id: 6,
    pic: "https://wallpaperaccess.com/full/1087736.jpg",
  },
];

export default function Browse() {
  return (
    <div className="bg-black min-h-screen text-white flex flex-col justify-center items-center">
      <div className="home-browse">
        <div className="absolute bottom-24 ml-10 w-1/2">
          <h1 className="text-6xl text-white">Extraction</h1>
          <p>
            A black-market mercenary who has nothing to lose is hired to rescue
            the kidnapped son of an imprisoned international crime lord.
          </p>
          <div className="mt-5 flex">
            <Link href={"#"}>
              <button className="bg-white text-lg flex items-center justify-center rounded-sm text-black py-1 px-10 ">
                Play
              </button>
            </Link>
            <Link href={"#"}>
              <button className="ml-5 text-lg flex items-center justify-center rounded-sm bg-gray-300 bg-opacity-25 text-white px-10 ">
                More info
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-full pl-10">
        <div className="my-5">
          <h1 className="mb-2 text-xl font-bold">Trending on Netflix</h1>
        </div>
        <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
          <div className="flex flex-nowrap ">
            {data.map((item, index) => (
              <MovieCard item={item} key={index} />
            ))}
          </div>
        </div>
        <div className="my-5">
          <h1 className="mb-2 text-xl font-bold">Trending on Netflix</h1>
        </div>
        <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
          <div className="flex flex-nowrap ">
            {data1.map((item, index) => (
              <MovieCard item={item} key={index} />
            ))}
          </div>
        </div>
        <div className="my-5">
          <h1 className="mb-2 text-xl font-bold">Trending on Netflix</h1>
        </div>
        <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
          <div className="flex flex-nowrap ">
            {data.map((item, index) => (
              <MovieCard item={item} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

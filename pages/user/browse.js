import React from "react";
import Link from "next/link";
import MovieCard from "../../components/MovieCard";
import MovieList from "../../components/MovieList";
import MovieModal from "../../components/MovieModal";


const trending = [
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
    pic: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/06/Ram-Charan-RRR-feature.jpg?q=50&fit=contain&w=1500&h=750&dpr=1.5",
  },
  {
    id: 6,
    pic: "https://wallpaperaccess.com/full/1087736.jpg",
  },
];
const popular = [
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
const hollywoodMovies = [
  {
    id: 1,
    pic: "https://www.indiewire.com/wp-content/uploads/2021/05/E1B0XwbXsAAcGNi.jpg",
  },
  {
    id: 2,
    pic: "https://cdn1-www.superherohype.com/assets/uploads/2022/02/theadamproject.jpg",
  },
  {
    id: 3,
    pic: "https://cdn.mos.cms.futurecdn.net/YJtbJnpHbE9ZLwka8Jz9PW.jpg",
  },
  {
    id: 4,
    pic: "https://images.indianexpress.com/2021/11/Red_Notice_review-1200.jpg",
  },
  {
    id: 5,
    pic: "https://cdn.mos.cms.futurecdn.net/qX5psXPx8TexJQ4dyL5nqi.jpg",
  },
  {
    id: 6,
    pic: "https://images.indianexpress.com/2021/03/godzilla-vs-kong-1200-3.jpg",
  },
];
const bollywoodMovies = [
  {
    id: 1,
    pic: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/02/25/1022990-alia-bhatt-gangubai-kathiawadi.jpg",
  },
  {
    id: 2,
    pic: "https://m.media-amazon.com/images/M/MV5BNWRmMDZlYmMtNGM4MS00NjI0LWIzZmQtNzUyZWZkODE3Yjc0XkEyXkFqcGdeQXVyODEwMzg4Nzg@._V1_.jpg",
  },
  {
    id: 3,
    pic: "https://images.indianexpress.com/2021/06/haseen-dillruba-1200-2.jpg",
  },
  {
    id: 4,
    pic: "https://assetscdn1.paytm.com/images/cinema/soryavanshi-app-780c98c0-36fd-11ec-b83e-0f984fa97b41.jpg",
  },
  {
    id: 5,
    pic: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2021/11/19/1006039-dhamaka-kartik-aaryan.jpg",
  },
  {
    id: 6,
    pic: "http://www.firstpost.com/wp-content/uploads/large_file_plugin/2020/02/1582011635_KiaraGuiltyS.png",
  },
];
const usShows = [
  {
    id: 1,
    pic: "https://phantom-marca.unidadeditorial.es/4ede02c9fb3939b4466344dd6709187e/resize/1320/f/jpg/assets/multimedia/imagenes/2022/04/04/16490904034742.jpg",
  },
  {
    id: 2,
    pic: "https://d.newsweek.com/en/full/2054936/still-all-us-are-dead.jpg",
  },
  {
    id: 3,
    pic: "https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQa82SXtuPjaBo68E43Ii7t7YL6uXHCOslWuO5sb_gyhlwHj66UKt4gzupamC4fQ_ns0P6oO9ISQZ4usg1NCQVj7DsuyEson1DE4N1JsRWvmsu-T8-nMcEoSN58qw2JgImdc1JiNqMxfYGOK_hlsKvhbap9A.jpg?r=e2c",
  },
  {
    id: 4,
    pic: "https://www.hmv.me/wp-content/uploads/2020/10/dark.png",
  },
  {
    id: 5,
    pic: "https://cdn.vox-cdn.com/thumbor/sK3gMTENF_LR1DhAUl9e3V_5jC4=/0x0:2592x2017/1200x800/filters:focal(1089x801:1503x1215)/cdn.vox-cdn.com/uploads/chorus_image/image/65282724/friendscast.0.0.1429818191.0.jpg",
  },
  {
    id: 6,
    pic: "https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F210928133734-13-october-streaming-2021-you.jpg",
  },
];

export default function Browse() {
  return (
    <div className=" min-h-screen text-white flex flex-col justify-center items-center">
      <div className="home-browse">
        <div className="absolute bottom-24 ml-10 w-100 md:w-1/2">
          <h1 className="text-7xl font-medium text-white my-4">Extraction</h1>
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

      <div className="max-w-full pl-10 mt-5">
        <MovieList data={trending} title="Trending on Netflix" />
        <MovieList data={hollywoodMovies} title="Hollywood Movies" />
        <MovieList data={popular} title="Popular in India" />
        <MovieList data={usShows} title="Popular shows on Netflix" />
        <MovieList data={bollywoodMovies} title="Bollywood Movies" />
      </div>
      {/* <MovieModal /> */}
    </div>
  );
}

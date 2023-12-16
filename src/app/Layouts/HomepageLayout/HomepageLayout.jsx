import { get_genre, send_request } from "../../../hooks/TMDB";
import NavBar from "../../Components/NavBar/NavBar";
import feature_posts from "../../../data/feature_posts.json";
import "./HomepageLayout.css";
import HomepageFragmentFeaturePost from "./Fragments/HomepageFragmentFeaturePost";
import RT_Card_Detail from "../../Components/RT_Card_Detail/RT_Card_Detail";
import RT_Card_Detail_Card from "../../Components/RT_Card_Detail/Fragments/RT_Card_Detail_Card";
import { useState } from "react";

const HomepageLayout = () => {
  // Variable Initialization
  const trending_placeholder = send_request("/trending/movie/day");
  const trending_tv_placeholder = send_request("/trending/tv/day");
  const upcoming_placeholder = send_request("/movie/upcoming");

  // Logics
  const [cardErected, setCardErected] = useState(undefined);
  const [cardGroup, setCardGroup] = useState(undefined);

  const cardErectionHandler = (index, group) => {
    if (cardErected === undefined) {
      setCardErected(index);
      setCardGroup(group);
    } else if (cardErected === index && cardGroup === group) {
      setCardErected(undefined);
      setCardGroup(undefined);
    } else {
      setCardErected(index);
      setCardGroup(group);
    }
  };

  return (
    <>
      {/* Navigation Bar */}
      <NavBar />
      <div id="homepage" className="homepage">
        <section id="main-hero">
          <div className="backdrop">
            <img
              src="https://www.themoviedb.org/t/p/original/BtUB5ZDu6sc2vNbXFPXTqbD7kv.jpg"
              alt="Backdrop of Wonka"
            />
          </div>
          <div className="content-dekstop">
            <div>
              <h1 className="eb-garamond text-light text-center">
                WONDER WOMAN
              </h1>
              <span className="text-warning oswald text-center d-block m-auto">
                JUSTICE STARTED NOW
              </span>
              <a
                href="#featurePosts"
                className="border-1 border-light border rounded-4 px-4 py-2 w-fit-content text-decoration-none d-block m-auto mt-4 text-light"
              >
                More
              </a>
            </div>
          </div>
        </section>
        <section id="featurePosts">
          <div className="primus-container">
            <div className="backdrop">
              <img src="/reeltalk/samurai-nobg.png" alt="Samurai" />
            </div>
            <div className="body">
              <span className="first-label oswald d-block">MY FAVORITES</span>
              <a
                href="/reeltalk/post/all-my-favorites"
                className="text-decoration-none"
              >
                <h4 className="rubik m-0 text-danger fw-bold">
                  THE BEST MOVIES OF ALL TIME
                </h4>
              </a>
              <span className="second-label mb-3 d-block">
                <small>MOVIES · SERIES · GAMES</small>
              </span>
              <p className="quicksand">
                In this comprehensive article, the focus is on exploring the
                diverse realm of entertainment that captures my heart. From
                captivating movies that transport viewers to different worlds,
                to engaging series that unfold intricate narratives, and
                riveting video games that provide immersive experiences.
              </p>
              <div>
                <a href="#" className="btn px-0 text-danger me-2">
                  <i className="bi bi-arrow-right me-1"></i> More Information
                </a>
                <a href="#" className="trailer btn">
                  <i className="bi bi-play-circle-fill me-1"></i> Trailer
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="featurePostsSecundo">
          {feature_posts["posts"] &&
            feature_posts["posts"].map((item, index) => (
              <HomepageFragmentFeaturePost
                key={index}
                thumbnail={item.thumbnail}
                title={item.title}
                link={item.link}
                comments={item.comments}
                likes={item.likes}
                date={item.date}
              />
            ))}
        </section>
        {/* Homepage [CARD : Popular Movies] */}
        <section id="popularMovies" className="mt-4 px-2">
          <h4 className="border-start border-4 border-warning ps-2 text-light">
            Just Released
          </h4>
          <RT_Card_Detail>
            {upcoming_placeholder["results"] &&
              upcoming_placeholder["results"].map((item, index) => (
                <div
                  key={index}
                  onClick={() => cardErectionHandler(index, "upcoming")}
                >
                  <RT_Card_Detail_Card
                    className={
                      index === cardErected && "upcoming" === cardGroup
                        ? "erected"
                        : ""
                    }
                    title={item.title}
                    backdrop={
                      "https://image.tmdb.org/t/p/w300" + item.backdrop_path
                    }
                    poster={
                      "https://image.tmdb.org/t/p/w185" + item.poster_path
                    }
                    genre={get_genre("movie", item.genre_ids, 3)}
                    id={item.id}
                    mediaType="movie"
                    date={item.release_date}
                  />
                </div>
              ))}
          </RT_Card_Detail>
        </section>

        {/* Homepage [CARD : Popular Movies] */}
        <section id="popularMovies" className="mt-4 px-2">
          <h4 className="border-start border-4 border-warning ps-2 text-light">
            Popular Movies
          </h4>
          <RT_Card_Detail>
            {trending_placeholder["results"] &&
              trending_placeholder["results"].map((item, index) => (
                <div
                  key={index}
                  onClick={() => cardErectionHandler(index, "popularMovies")}
                >
                  <RT_Card_Detail_Card
                    className={
                      index === cardErected && "popularMovies" === cardGroup
                        ? "erected"
                        : ""
                    }
                    title={item.title}
                    backdrop={
                      "https://image.tmdb.org/t/p/w185" + item.backdrop_path
                    }
                    poster={
                      "https://image.tmdb.org/t/p/w300" + item.poster_path
                    }
                    genre={get_genre("movie", item.genre_ids, 3)}
                    id={item.id}
                    mediaType="movie"
                    date={item.release_date}
                  />
                </div>
              ))}
          </RT_Card_Detail>
        </section>

        {/* Homepage [CARD : Popular Movies] */}
        <section id="popularMovies" className="mt-4 px-2">
          <h4 className="border-start border-4 border-warning ps-2 text-light">
            Popular Series
          </h4>
          <RT_Card_Detail>
            {trending_tv_placeholder["results"] &&
              trending_tv_placeholder["results"].map((item, index) => (
                <div
                  key={index}
                  onClick={() => cardErectionHandler(index, "popularSeries")}
                >
                  <RT_Card_Detail_Card
                    className={
                      index === cardErected && "popularSeries" === cardGroup
                        ? "erected"
                        : ""
                    }
                    title={item.name}
                    backdrop={
                      "https://image.tmdb.org/t/p/w185" + item.backdrop_path
                    }
                    poster={
                      "https://image.tmdb.org/t/p/w300" + item.poster_path
                    }
                    genre={get_genre("tv", item.genre_ids, 3)}
                    id={item.id}
                    mediaType="tv"
                    date={item.first_air_date}
                  />
                </div>
              ))}
          </RT_Card_Detail>
        </section>
      </div>
    </>
  );
};

export default HomepageLayout;

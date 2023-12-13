import { get_genre, send_request } from "../../../hooks/TMDB";
import NavBar from "../../Components/NavBar/NavBar";
import feature_posts from "../../../data/feature_posts.json";
import Cards from "../../Components/Cards/Cards";
import Card from "../../Components/Cards/Fragments/Card";
import "./HomepageLayout.css";
import RT_Carousel from "../../Components/RTCarousel/RT_Carousel";

const HomepageLayout = () => {
  // Variable Initialization
  const trending_placeholder = send_request("/trending/movie/day");
  const trending_tv_placeholder = send_request("/trending/tv/day");
  const upcoming_placeholder = send_request("/movie/upcoming");

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
              {/* <img
                className="reeltalk-logo d-block m-auto mb-4"
                src="/reeltalk/resources/logos/reeltalk-1-nobg.svg"
                alt="Reeltalk Logo"
              /> */}
              <h1 className="eb-garamond text-light text-center">
                WONDER WOMAN
              </h1>
              <span className="text-warning oswald text-center d-block m-auto">
                JUSTICE STARTED NOW
              </span>
              <button className="glass-morphism px-4 py-2 d-block m-auto mt-4 text-light">
                More
              </button>
            </div>
          </div>
        </section>
        {/* Homepage [hero] */}
        <section id="pre-hero">
          <div className="backdrop">
            <img src="/reeltalk/samurai-nobg.png" alt="Samurai" />
          </div>
          <div className="backdrop-detail text-light">
            <div className="pe-4">
              <span className="interline-separator d-none">
                <hr />
              </span>
              <span className="first-headlihe-label roboto fw-bold">
                MY FAVORITE
              </span>
              <h4 className="rubik m-0 mt-4">THE BEST MOVIE OF ALL TIME</h4>
              <span className="second-label mt-2 mb-2 d-block rubik">
                MOVIES · SERIES · GAMES
              </span>
              <p className="quicksand">
                In this comprehensive article, the focus is on exploring the
                diverse realm of entertainment that captures my heart. From
                captivating movies that transport viewers to different worlds,
                to engaging series that unfold intricate narratives, and
                riveting video games that provide immersive experiences.{" "}
              </p>
              <a
                href="#"
                className="btn btn-danger quicksand text-decoration-none me-4"
              >
                <i className="bi bi-arrow-right me-2"></i> Read More
              </a>
              <a
                href="#hero"
                className="quicksand btn btn-secondary text-decoration-none"
              >
                <i className="bi bi-play-circle-fill"></i> Next Section
              </a>
            </div>
          </div>
        </section>
        <section id="hero">
          {feature_posts["posts"] &&
            feature_posts["posts"].map((item, index) => (
              <div className="hero-item" key={index}>
                <a href={item.link}>
                  <img src={item.thumbnail} alt={item.title} />
                  <div className="body">
                    <div className="p-4">
                      <span className="oswald text-warning">{item.label}</span>
                      <h4 className="rubik m-0">{item.title}</h4>
                      <div>
                        <small>
                          <span className="me-2">{item.date}</span>
                          <span className="me-2">
                            {item.comments}
                            <i className="bi bi-chat-dots-fill ms-1"></i>
                          </span>
                          <span className="me-2">
                            {item.likes}
                            <i className="bi bi-heart ms-1"></i>
                          </span>
                        </small>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
        </section>
        {/* Homepage [trending] */}
        <section id="trending" className="mockingjay mt-4 p-4 text-light px-2">
          <div className="px-2">
            <h4 className="rubik border-start border-4 border-warning ps-2 mb-3">
              Trending Movies
            </h4>
          </div>
          <Cards>
            {trending_placeholder["results"] &&
              trending_placeholder["results"].map((item, index) => (
                <Card
                  key={index}
                  backdrop={
                    "https://image.tmdb.org/t/p/w780" + item.backdrop_path
                  }
                  title={item.title}
                  label={get_genre("movie", item.genre_ids, 3)}
                />
              ))}
          </Cards>
        </section>
        {/* Homepage [upcoming] */}
        <section id="trending" className="mockingjay mt-4 p-4 px-2">
          <div className="px-2">
            <h4 className="text-light rubik border-start border-4 border-warning ps-2 mb-3">
              Just Released
            </h4>
          </div>
          <Cards>
            {upcoming_placeholder["results"] &&
              upcoming_placeholder["results"].map((item, index) => (
                <Card
                  key={index}
                  backdrop={
                    "https://image.tmdb.org/t/p/w780" + item.backdrop_path
                  }
                  title={item.title}
                  label={item.release_date}
                />
              ))}
          </Cards>
        </section>
        {/* Homepage [TV Trending] */}
        <section id="trending" className="mockingjay mt-4 p-4 px-2">
          <div className="px-2">
            <h4 className="text-light rubik border-start border-4 border-warning ps-2 mb-3">
              Series Popular
            </h4>
          </div>
          <Cards>
            {trending_tv_placeholder["results"] &&
              trending_tv_placeholder["results"].map((item, index) => (
                <Card
                  key={index}
                  backdrop={
                    "https://image.tmdb.org/t/p/w780" + item.backdrop_path
                  }
                  title={item.name}
                  label={get_genre("tv", item.genre_ids, 2)}
                />
              ))}
          </Cards>
        </section>
      </div>
    </>
  );
};

export default HomepageLayout;

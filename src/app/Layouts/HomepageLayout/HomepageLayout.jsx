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
        <RT_Carousel array={trending_tv_placeholder["results"]} />
        {/* Homepage [hero] */}
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
        <section id="trending" className="mt-4">
          <div className="px-2">
            <h4 className="text-light rubik border-start border-4 border-warning ps-2 mb-3">
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
        <section id="trending" className="mt-4">
          <div className="px-2">
            <h4 className="text-light rubik border-start border-4 border-warning ps-2 mb-3">
              Upcoming and Just Released
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
        <section id="trending" className="mt-4">
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

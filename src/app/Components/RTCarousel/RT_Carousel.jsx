import Carousel from "react-bootstrap/Carousel";
import "./RT_Carousel.css";
import { get_genre } from "../../../hooks/TMDB";

function RT_Carousel({ array = [] }) {
  if (array.length < 1) return;

  const items = array.slice(1, 9);

  console.log(items);

  return (
    <div className="rt-carousel-container">
      <Carousel className="rt-carousel">
        {items &&
          items.map((item, index) => (
            <Carousel.Item key={index}>
              <div className="backdrop">
                <img
                  src={"https://image.tmdb.org/t/p/w1280" + item.backdrop_path}
                  alt={"backdrop of " + item.name}
                />
              </div>
              <div className="caption d-flex align-items-end text-light">
                <div>
                  <h1 className="rubik m-0">{item.name}</h1>
                  <p className="oswald m-0 mb-4">
                    <small>{get_genre("tv", item.genre_ids.slice(0, 1))}</small>
                  </p>
                  <a href="#" className="text-light text-decoration-none">
                    <i className="bi bi-arrow-right-circle-fill me-2"></i>More
                    Information
                  </a>
                  <a
                    href={"https://pahe.me/?s=" + item.name}
                    target="blank"
                    className="text-light text-decoration-none ms-3"
                  >
                    <i className="bi bi-download me-2"></i>Pahe
                  </a>
                </div>
              </div>
            </Carousel.Item>
          ))}
      </Carousel>
    </div>
  );
}

export default RT_Carousel;

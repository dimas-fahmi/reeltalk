import Carousel from "react-bootstrap/Carousel";
import "./RT_Carousel.css";

function RT_Carousel({ array = [] }) {
  if (array.length < 1) return;

  const items = array.slice(0, 3);

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
              <div className="caption d-flex align-items-center justify-content-center text-light text-center">
                <div>
                  <img
                    src={"https://image.tmdb.org/t/p/w154" + item.poster_path}
                    alt={"poster of " + item.name}
                    className="poster mb-3"
                  />
                  <h4 className="rubik">{item.name}</h4>
                  <p className="quicksand px-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                    deserunt quo quasi at sequi perspiciatis corrupti fugiat
                    possimus.
                  </p>
                  <button className="btn glass-morphism text-light px-4 py-2 rounded-3">
                    Play
                  </button>
                </div>
              </div>
            </Carousel.Item>
          ))}
      </Carousel>
    </div>
  );
}

export default RT_Carousel;

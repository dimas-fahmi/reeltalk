import React from "react";

const RT_Card_Detail_Card = ({
  className = "",
  backdrop,
  poster,
  title,
  rating,
  genre,
}) => {
  return (
    <div className={"rt-card " + className}>
      <div className="backdrop">
        <img src={poster} alt={"Poster Of " + title} loading="lazy" />
      </div>
      <div className="second-backdrop">
        <img src={backdrop} alt={"Backdrop Of " + title} loading="lazy" />
      </div>
      <div className="rating">{rating}</div>
      <div className="detail">
        <div>
          <h4 className="oswald">{title}</h4>
          <span className="genre quicksand">{genre}</span>
          <div className="mt-3">
            <a
              href="#"
              className="glass-morphism text-light text-decoration-none py-1 px-4 me-2"
            >
              <i className="bi bi-play me-2"></i>Open
            </a>
            <a
              href="#"
              className="glass-morphism text-light text-decoration-none py-1 px-4"
            >
              <i className="bi bi-download me-2"></i>Pahe
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RT_Card_Detail_Card;

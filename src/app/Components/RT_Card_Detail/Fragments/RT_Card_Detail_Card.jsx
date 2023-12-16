import React from "react";

const RT_Card_Detail_Card = ({
  className = "",
  backdrop,
  poster,
  title,
  rating,
  genre,
  mediaType,
  id,
  date,
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
              href={"/reeltalk/" + mediaType + "/?id=" + id}
              className="glass-morphism text-light text-decoration-none py-1 px-4 me-2"
            >
              <i className="bi bi-play me-1"></i>Trailer
            </a>
            <a
              href={
                "https://pahe.me/?s=" +
                title +
                (mediaType === "movie" && date
                  ? "%20" + date.split("-")[0]
                  : "")
              }
              target="blank"
              className="glass-morphism text-light text-decoration-none py-1 px-4"
            >
              <i className="bi bi-download me-1"></i>Pahe
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RT_Card_Detail_Card;

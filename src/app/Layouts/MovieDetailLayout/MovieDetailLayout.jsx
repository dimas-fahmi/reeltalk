import React, { useEffect, useState } from "react";
import "./MovieDetailLayout.css";
import { Navbar } from "react-bootstrap";
import NavBar from "../../Components/NavBar/NavBar";
import { send_request } from "../../../hooks/TMDB";

const MovieDetailLayout = () => {
  // Variable Initialization
  const [loaded, setLoaded] = useState(false);
  const urlParams = new URLSearchParams(window.location.search);
  const movie_detail = send_request("/movie/" + urlParams.get("id"));

  useEffect(() => {
    if (movie_detail["id"]) {
      setLoaded(true);
    }
  }, [movie_detail]);

  return (
    <>
      {!loaded ? (
        "loading"
      ) : (
        <>
          <NavBar />
          <div className="movie-detail-layout" id="movieDetailLayout">
            <section id="hero">
              <div className="dekstop">
                <div className="backdrop">
                  <img
                    src={
                      "https://image.tmdb.org/t/p/w1280" +
                      movie_detail["backdrop_path"]
                    }
                    alt=""
                  />
                </div>
                <div className="overlay"></div>
              </div>
            </section>
          </div>
        </>
      )}
    </>
  );
};

export default MovieDetailLayout;

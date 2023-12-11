import { useEffect, useState } from "react";
import tmdb_genres from "../data/tmdb_genres.json";
import axios from "axios";

export const send_request = (request, params = false) => {
  // Variable Initializations
  const [data, setData] = useState([]);

  // Logics

  const get_data = async (req) => {
    try {
      const response = await axios(req);
      setData(response["data"]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const url =
      "https://api.themoviedb.org/3" +
      request +
      "?api_key=e113e2d95da16897354f64663bfbd355&" +
      params;

    get_data(url);
  }, []);

  return data;
};

export const get_genre = (mediaType, ids, cut = false) => {
  const genreNames = ids.map((id) => {
    const genre = tmdb_genres[mediaType].find((g) => g.id === id);
    return genre ? genre.name : `Genre with ID ${id} not found`;
  });

  if (!cut) {
    return genreNames.join(", ");
  }
  const result = genreNames.slice(0, cut);

  return result.join(", ");
};

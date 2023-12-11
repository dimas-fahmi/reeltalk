import { get_genre } from "../../../../hooks/TMDB";

const Card = ({ backdrop, title, label }) => {
  return (
    <div className="card">
      <div className="backdrop">
        <img src={backdrop} alt={"Poster Of " + title} />
      </div>
      <div className="body d-flex align-items-end">
        <div className="p-2">
          <a href="#" className="text-light text-decoration-none">
            <h4 className="oswald m-0">{title}</h4>
          </a>
          <span>
            <small>{label}</small>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;

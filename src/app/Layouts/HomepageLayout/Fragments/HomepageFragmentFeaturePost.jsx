import React from "react";

const HomepageFragmentFeaturePost = ({
  link,
  thumbnail,
  title,
  date,
  comments,
  likes,
}) => {
  return (
    <div className="secundo-item">
      <a href={link}>
        <div className="backdrop">
          <img src={thumbnail} alt={"Thumbnail of " + title} />
        </div>
        <div className="body">
          <div>
            <span className="first-label oswald text-warning">COMING SOON</span>
            <h4 className="rubik">{title}</h4>
            <span className="attributes rubik">
              <span className="me-2">{date}</span>
              <span className="me-2">
                <i className="bi bi-chat-dots me-1"></i>
                {comments}
              </span>
              ·
              <span className="ms-2">
                <i className="bi bi-heart me-1"></i>
                {likes}
              </span>
            </span>
          </div>
        </div>
      </a>
    </div>
  );
};

export default HomepageFragmentFeaturePost;

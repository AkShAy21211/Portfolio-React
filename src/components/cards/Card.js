import React, { useState } from "react";

function Card({ image, title, para, btn, info, isPorfolio, url,project ,techonologies}) {
  const [hover, setHover] = useState(false);

  const toogleHover = () => setHover((prev) => !prev);
  const navigate = (url) => (window.location = url);

  return (
    <>
      <div
        onMouseOver={toogleHover}
        onMouseOut={toogleHover}
        className={`skill-card ${
          hover && isPorfolio ? "ishovered" : ""
        } object-fit-contain`}
        style={{
          backgroundImage: isPorfolio && !hover ? `url(${image})` : "",
          backgroundSize: "cover", // Ensure the image fits within the container
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: `${isPorfolio ? "auto" : ""}`,
          height: `${isPorfolio ? "300px" : ""}`,
          filter: `${isPorfolio && hover ? "none" : "blur(50%)"}`,
        }}
      >
        {!isPorfolio && (
          <>
            <h3 className="text-center">{title}</h3>
            <img src={image} className="object-contain" alt="" />
          </>
        )}

        {hover && (
          <div className="d-flex flex-column">
            <p className="font-bold h3">{project}</p>
            <button
              onClick={() => navigate(url)}
              className={`${btn ? "" : "d-none"} btn btn-warning`}
            >
              View
            </button>
          </div>
        )}
      </div>

      {isPorfolio && (
        <div className="d-flex gap-2 w-100 justify-content-center px-3 flex-wrap">
          {techonologies.map((tech, i) => (
            <p className="p-1 bg-warning bg-opacity-25 rounded" key={i}>{tech}</p>
          ))}
        </div>
      )}
    </>
  );
}

export default Card;

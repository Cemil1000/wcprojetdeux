import { FaPlayCircle } from "react-icons/fa";
import { useState } from "react";

export default function HomeVideo() {
  const [contenuVideo, setContenuVideo] = useState("affiche-imgIconVideo");

  function activatePlay() {
    setContenuVideo("supp-imgIconVideo");
  }

  return (
    <>
      <section id="allVideo">
        <div className="container-Perso allVideo">
          <div className="video">
            <img
              className="imgVideo"
              src="img/slider/video-player-thumb.jpg"
              alt="image d'un homme qui parle"
            />
            <FaPlayCircle
              onClick={activatePlay}
              size={"80"}
              className={"icon-homeVideo " + contenuVideo}
            />
          </div>

          <div className="videoText">
            <h2>We love to make brands grow</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At quo
              dolor est incidunt suscipit minima, alias numquam voluptatum rerum
              porro. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Labore at laboriosam unde repellat id expedita quae quisquam
              libero officia consequatur.
            </p>
            <a href="https://themefisher.com/" target="_blank">
              Download More
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
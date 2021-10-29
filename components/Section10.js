import { useState } from "react";

export default function Section10() {

  const arrayBtn = [
    {
      btnName: "Our Philosophy",
      content: (
        <>
          <h2>We Create Designs<br/>and technology</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat
            voluptate molestias, quaerat quo natus dolor harum voluptatibus modi
            dicta ducimus.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum quae
            officia earum dolore est quaerat cupiditate voluptatibus id, magni
            alias veniam voluptate, libero explicabo, distinctio atque!
          </p>
        </>
      ),
      imageContent: (
        <img src="img/company/company-image.jpg" alt="Homme qui écrit sur un tableau" />
      ),
    },
    {
      btnName: "Mission",
      content: (
        <>
          <h2>Our Mission</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat
            voluptate molestias, quaerat quo natus dolor harum voluptatibus modi
            dicta ducimus.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum quae
            officia earum dolore est quaerat cupiditate voluptatibus id, magni
            alias veniam voluptate, libero explicabo, distinctio atque!
          </p>
        </>
      ),
      imageContent: (
        <img src="img/company/company-image-2.jpg" alt="Un équipe en réunion" />
      ),
    },
    {
      btnName: "Vision",
      content: (
        <>
          <h2>Our Vision</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat
            voluptate molestias, quaerat quo natus dolor harum voluptatibus modi
            dicta ducimus.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum quae
            officia earum dolore est quaerat cupiditate voluptatibus id, magni
            alias veniam voluptate, libero explicabo, distinctio atque!
          </p>
        </>
      ),
      imageContent: (
        <img src="img/company/company-image-3.jpg" alt="Plusieur personne qui travaille" />
      ),
    },
  ];
  const [activeButton, setActiveButton] = useState(arrayBtn[0]);

  const listBtn = arrayBtn.map((elem) => (
    <li
      onClick={() => { setActiveButton(elem); }}
      className={`link ${ activeButton.btnName === elem.btnName ? "active" : "" }`}>
      {elem.btnName}
    </li>
  ));

  return (
    <>
      <section id="section10" className="separation">
        <div id="titre-general">
          <h4>LITTLE MORE BRIEF</h4>
          <h2>About Us.</h2>
          <span></span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
            reiciendis quasi itaque, obcaecati atque sit!
          </p>
        </div>

        <div className="container-Perso company">
          <ul>{listBtn}</ul>

          <div className="body-Section10">
            <div className="textLeft">{activeButton.content}</div>
            <div className="imgRight">{activeButton.imageContent}</div>
          </div>
        </div>
      </section>
    </>
  );
}
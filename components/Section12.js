import { IoMdCheckboxOutline } from "react-icons/Io";
import { Slide } from "react-slideshow-image";

export default function Section12() {
  const allCardsSlide = [
    {
      img: <img src="img/client-logo/logo-1.png" alt="logo" />
    },
    {
      img: <img src="img/client-logo/logo-2.png" alt="logo" />
    },
    {
      img: <img src="img/client-logo/logo-3.png" alt="logo" />
    },
    {
      img: <img src="img/client-logo/logo-4.png" alt="logo" />
    },
    {
      img: <img src="img/client-logo/logo-5.png" alt="logo" />
    }
  ]

  const cardsSlide = allCardsSlide.map((elem, index) => {
    return (
      <>
        <div key={"cardS7" + index} className="each-slide">
          <div className="imgProfil">{elem.img}</div>
        </div>
      </>
    );
  });

  const proprietes = {
    duration: 3000,
    transitionDuration: 500,
    onChange: true,
    infinite: true,
    indicators: false,
    arrows: false,
  };

  const icon = <IoMdCheckboxOutline size={"14"} className="icon-Section12" />;
  return (
    <>
      <section className="section12 separation">
        <div className="container-Perso check">
          <div className="image">
            <img src="./img/about/about-1.jpg" alt="" />
          </div>
          <div className="section12-Body">
            <h2>We care about our work</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
              dolorem, saepe ab, optio obcaecati id asperiores. Ab ullam qui
              architecto at eos distinctio debitis, libero reprehenderit
              excepturi rem ut odit est nam magni ratione necessitatibus, quod
              eaque, eius minima tempora deleniti illum aliquam! Perferendis
              optio dolorum blanditiis sapiente aperiam quaerat.
            </p>
            <div>
              <div>
                <ul>
                  <li>{icon} Creative Designers</li>
                  <li>{icon} Genius Developers</li>
                  <li>{icon} Growth Hackers</li>
                  <li>{icon} Marketing Masterminds</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>{icon} Growth Hackers</li>
                  <li>{icon} Genius Developers</li>
                  <li>{icon} Marketing Masterminds</li>
                  <li>{icon} Creative Designers</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div id="section12" className="container-Perso">
          <div className="allSlide">
            <Slide {...proprietes}>{cardsSlide}</Slide>
          </div>
        </div>
      </section>
    </>
  );
}
import { FaQuoteLeft } from "react-icons/fa";
import { Slide } from "react-slideshow-image";

export default function Section7() {

  const allCardsSlide = [
    {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum nulla, soluta dolorum. Eos earum, magni asperiores, unde corporis labore, enim, voluptatum officiis voluptates alias natus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, officia. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, quia?",
      img: <img src="img/client-logo/clients-2.jpg" alt="Profil d'un homme" />,
      titre: "Matt Cutts",
      NomDuDomaine: "CEO , Company Name"
    },
    {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum nulla, soluta dolorum. Eos earum, magni asperiores, unde corporis labore, enim, voluptatum officiis voluptates alias natus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, officia. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, quia?",
      img: <img src="img/client-logo/clients-1.jpg" alt="Profil d'une femme" />,
      titre: "Jonathon Ive",
      NomDuDomaine: "CEO , Company Name"
    },
    {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum nulla, soluta dolorum. Eos earum, magni asperiores, unde corporis labore, enim, voluptatum officiis voluptates alias natus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, officia. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, quia?",
      img: <img src="img/client-logo/clients-1.jpg" alt="profil d'une femme" />,
      titre: "Jonathon Ive",
      NomDuDomaine: "CEO , Company Name"
    }
  ];

  const cardsSlide = allCardsSlide.map((elem, index) => {
    return (
      <>
        <div key={"cardS7"+index} className="each-slide">
          <FaQuoteLeft size={"40"} className="iconQuote" />
          <div className="description">
            <p>{elem.description}</p>
          </div>
          <div className="imgProfil">{elem.img}</div>
          <div className="textProfil">
            <h4>{elem.titre}</h4>
            <span>{elem.NomDuDomaine}</span>
          </div>
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

  return (
    <>
      <section className="section7">
        <div id="section7" className="container-Perso separation">
          <div className="allSlide">
            <Slide {...proprietes}>
              {cardsSlide}
            </Slide>
          </div>
        </div>
      </section>
    </>
  );
}
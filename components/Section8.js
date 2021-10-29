export default function Section8() {

  const allCards = [
    {
      img: <img src="img/blog/post-1.jpg" alt="Femme qui travail" />,
      title_link: <a href="#">Ten things about Business</a>,
      description:
        "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est voluptatem accusantium dolorum, maxime eos blanditiis sint enim necessitatibus placeat dolor.",
      prefix:"By ",
      liLeft_link: <a href="#">Jonathon Ive</a>,
      liRight_spanDate: "15th December 2017"
    },
    {
      img: (
        <img src="img/blog/post-2.jpg" alt="Team de 2 qui travail sur un Pc" />
      ),
      title_link: <a href="#">Something I need to tell you</a>,
      description:
        "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est voluptatem accusantium dolorum, maxime eos blanditiis sint enim necessitatibus placeat dolor.",
      prefix:"By ",
      liLeft_link: <a href="#">Jonathon Ive</a>,
      liRight_spanDate: "15th December 2017"
    },
    {
      img: <img src="img/blog/post-3.jpg" alt="Team de 2 qui travail" />,
      title_link: <a href="#">Are you doing the Right Way?</a>,
      description:
        "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est voluptatem accusantium dolorum, maxime eos blanditiis sint enim necessitatibus placeat dolor.",
      prefix:"By ",
      liLeft_link: <a href="#">Jonathon Ive</a>,
      liRight_spanDate: "15th December 2017"
    }
  ];
  
  const cardsList = allCards.map((elem, index) => {
    return (
      <>  
          <article key={"cardS8"+index} className="card-Section8">
            {elem.img}
            <h3>{elem.title_link}</h3>
            <ul>
              <li className="liLeft">
                <span>{elem.prefix} </span>
                {elem.liLeft_link}
              </li>
              <li className="liRight">
                <span>{elem.prefix} </span>
                {elem.liRight_spanDate}
              </li>
            </ul>
            <p>{elem.description}</p>
            <div className="btn-Article"><a href="#">Read more</a></div>
          </article>
      </>
    );
  });
  
  return (
    <>
      <section id="section8" className="separation">
        <div id="titre-general">
          <h4>OUR UNTOLD STORY</h4>
          <h2>Blog.</h2>
          <span></span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
            reiciendis quasi itaque, obcaecati atque sit!
          </p>
        </div>
        <div className="container-Perso cards-Article">
          {cardsList}
        </div>
      </section>
    </>
  );
}
import { IoMdCopy } from "react-icons/Io";
import { IoAlarmOutline, IoBookOutline } from "react-icons/Io5";

export default function Section2() {

    const talent =[
        {
            icon: <IoMdCopy size={"40"} className="icon-Section2"/>,
            title: 'WordPress Theme',
            description: 'Lorem ipsum dolor sit amet, consectetur.. Sed id lorem eget orci dictum facilisis vel id tellus. Nullam iaculis arcu at mauris dapibus consectetur.'
        },
        {
            icon: <IoAlarmOutline size={"40"} className="icon-Section2"/>,
            title: 'Responsive Design',
            description: 'Lorem ipsum dolor sit amet, consectetur.. Sed id lorem eget orci dictum facilisis vel id tellus. Nullam iaculis arcu at mauris dapibus consectetur.'
        },
        {
            icon: <IoBookOutline size={"40"} className="icon-Section2"/>,
            title: 'Media & Advertisement',
            description: 'Lorem ipsum dolor sit amet, consectetur.. Sed id lorem eget orci dictum facilisis vel id tellus. Nullam iaculis arcu at mauris dapibus consectetur.'
        }
    ]
    
  const list = talent.map((elem, index) => {
    return (
      <>
        <div key={"cardS2" + index} className="card-Section2">
          <p>{elem.icon}</p>
          <h3>{elem.title}</h3>
          <p>{elem.description}</p>
        </div>
      </>
    );
  });

  return (
    <>
      <section id="section2">
        <div className="container-Perso cards-Section2">
          {list}
        </div>

        <div className="about container-Perso">
          <div className="creativity">
            <div className="imgCreativity">
              <img
                src="img/about/about-1.jpg"
                alt="image d'un homme sur son ordinateur"
              />
            </div>
            <div className="textCreativity">
              <div className="containCreativity">
                <h2>Creativity is in our<br/> blood</h2>
                <p>
                  Curabitur felis nibh, imperdiet eu erat non, luctus cursus
                  lectus. Donec maximus diam leo, sed fringilla nisl auctor
                  eget. Donec dictum neque est, ac faucibus ex blandit a Lorem
                  ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                  quo minima ab aperiam molestiae natus repellendus neque culpa
                  iure, nemo veritatis explicabo facilis, officia, saepe! Et
                  corrupti odit, non deserunt.
                </p>
              </div>
            </div>
          </div>

          <div className="box">
            <div className="textBox">
              <div className="containBox">
                <h2>We think out of the<br/> Box</h2>
                <p>
                  Curabitur felis nibh, imperdiet eu erat non, luctus cursus
                  lectus. Donec maximus diam leo, sed fringilla nisl auctor
                  eget. Donec dictum neque est, ac faucibus ex blandit a Lorem
                  ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                  quo minima ab aperiam molestiae natus repellendus neque culpa
                  iure, nemo veritatis explicabo facilis, officia, saepe! Et
                  corrupti odit, non deserunt.
                </p>
              </div>
            </div>
            <div className="imgBox aboutSpace">
              <img
                src="img/about/about-2.jpg"
                alt="image d'un homme qui réfléchit"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
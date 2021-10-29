import { VscBriefcase } from "react-icons/Vsc";
import { IoAlarmOutline } from "react-icons/Io5";
import { AiOutlineMail, AiFillLock } from "react-icons/ai";

export default function Section3() {

  const allCards = [
    {
      count: "1.",
      icon: <VscBriefcase size={"40"} className="icon-Section3" />,
      title: "Project Analysis",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae risus nec dui venenatis."
    },
  
    {
      count: "2.",
      icon: <IoAlarmOutline size={"40"} className="icon-Section3" />,
      title: "Time Management",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae risus nec dui venenatis."
    },
  
    {
      count: "3.",
      icon: <AiOutlineMail size={"40"} className="icon-Section3" />,
      title: "Mail Support",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae risus nec dui venenatis."
    },
  
    {
      count: "4.",
      icon: <AiFillLock size={"40"} className="icon-Section3" />,
      title: "Secure System",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae risus nec dui venenatis."
    }
  ]
  
  const cardsList = allCards.map((elem, index) => {
    return (
      <>
        <div key={"cardS3"+index} className="card-Section3">
          <span className="count">{elem.count}</span>
          {elem.icon}
          <h4>{elem.title}</h4>
          <p>{elem.description}</p>
        </div>
      </>
    );
  });

  return (
    <>
      <section id="section3" className="separation">
        <div id="titre-general">
          <h4>HOW WE WORKS</h4>
          <h2>Our Work Process</h2>
          <span></span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
            reiciendis quasi itaque, obcaecati atque sit!
          </p>
        </div>
        
        <div className="container">
          <div className="cardsOurWork">
            {cardsList}
          </div>
        </div>
      </section>
    </>
  );
}
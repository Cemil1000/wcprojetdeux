import { ImFacebook, ImDribbble} from "react-icons/im";
import { IoLogoTwitter } from "react-icons/Io";
import { TiSocialGooglePlus } from "react-icons/ti";

export default function Section5() {
    const team =[
        {
            img: "img/team/member-1.jpg",
            nom: "Shawshank Redemption",
            role: "Head Of Marketing",
            descprition: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur necessitatibus ullam, culpa odio."
        },
        {
            img: "img/team/member-2.jpg",
            nom: "Luis Anthon",
            role: "Web Developer",
            descprition: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur necessitatibus ullam, culpa odio."
        },
        {
            img: "img/team/member-3.jpg",
            nom: "Jonathon Andrew",
            role: "Head Of Management",
            descprition: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur necessitatibus ullam, culpa odio."
        },
        {
            img: "img/team/member-4.jpg",
            nom: "Michael Jonson",
            role: "Head Of Management",
            descprition: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur necessitatibus ullam, culpa odio."
        }
    ]

    const personne = team.map((elem, index)=>{
        return(
            <>
                <div key={"cardS5"+index} className="card-Section5">
                    <img src={elem.img} alt={"Portrait photo de" + elem.nom}/>
                    <div className="card-Body">
                        <h3>{elem.nom}</h3>
                        <span>{elem.role}</span>
                        <p>{elem.descprition}</p>
                        <ul>
                            <li><a href=""><ImFacebook size={"18"} className="icon-Section5"/></a></li>
                            <li><a href=""><IoLogoTwitter size={"18"} className="icon-Section5"/></a></li>
                            <li><a href=""><TiSocialGooglePlus size={"23"} className="icon-Section5"/></a></li>
                            <li><a href=""><ImDribbble size={"18"} className="icon-Section5"/></a></li>
                        </ul>
                    </div>
                </div>
            </> 
        )
    })
    
    return (
        <>
            <section id="section5" className="separation">
                <div id="titre-general">
                    <h4>Team member</h4>
                    <h2>Our Team.</h2>
                    <span></span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum reiciendis quasi itaque, obcaecati atque sit!</p>
                </div>
                <div className="container-Perso cards-Section5">
                    {personne}
                </div>
            </section>
        </>
    )
}
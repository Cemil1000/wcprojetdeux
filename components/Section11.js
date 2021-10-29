import {IoMdCopy}from 'react-icons/Io'
import {IoAlarmOutline, IoBookOutline}from 'react-icons/Io5'

export default function Section11() {

    const services =[
        {
            icon: <IoMdCopy size={"30"}/>,
            titre: "Branding",
            description: [
                "Brand Strategy", 
                "Advertising / Campaigns",
                "Product Design",
                "Video / Photography"
            ]
        },
        {
            icon: <IoAlarmOutline size={"30"}/>,
            titre: "Web Design",
            description: [
                "UI Design", 
                "E- Commerce Site Design",
                "App Development",
                "Mobile UI Design"
            ]
        },
        {
            icon: <IoBookOutline size={"30"}/>,
            titre: "IOS App Development",
            description: [
                "Game Development", 
                "Game Design",
                "Social Media Marketing",
                "Mobile UI Design"
            ]
        }
    ]

    const service = services.map((elem, index)=>{
        return(
            <>
                <div key={"cardS11"+index} className="card-Section11">
                    <div className="card-Body">
                        <p>{elem.icon}</p>
                        <h3>{elem.titre}</h3>
                        <ul>
                            <li>{elem.description[0]}</li>
                            <li>{elem.description[1]}</li>
                            <li>{elem.description[2]}</li>
                            <li>{elem.description[3]}</li>
                        </ul>
                    </div>
                </div>
            </> 
        )
    })
    
    return (
        <>
            <section id="section11" className="separation">
                <div id="titre-general">
                    <h4>A LIST OF SERVICES</h4>
                    <h2>Our Service.</h2>
                    <span></span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum reiciendis quasi itaque, obcaecati atque sit!</p>
                </div>
                <div className="container-Perso cards-Section11">
                    {service}
                </div>
            </section>
        </>
    )
}
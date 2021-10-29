export default function Section6() {
    
    const paquets =[
        {
            categorie: "Basic",
            prix: "$99",
            descprition: "Perfect for single freelancers who work by themselves"
        },
        {
            categorie: "Advance",
            prix: "$199",
            descprition: "Suitable for small businesses with up to 5 employees"
        },
        {
            categorie: "PROFESSIONAL",
            prix: "$299",
            descprition: "Great for large businesses with more than 5 employees"
        }
    ]

    const paquet = paquets.map((elem, index)=>{
        return(
            <>
                <div key={"cardS6"+index} className="card-Section6">
                    <div className="prix">
                        <h3>{elem.categorie}</h3>
                        <span>{elem.prix}</span>
                        <p>{elem.descprition}</p>
                    </div>                        
                    <div className="card-Body">
                        <ul>
                            <li>1GB Disk Space</li>
                            <li>10 Email Account</li>
                            <li>Script Installer</li>
                            <li>1 GB Storage</li>
                            <li>10 GB Bandwidth</li>
                            <li>24/7 Tech Support</li>
                        </ul>
                        <div className="btn-Article"><a href="#">Signup</a></div>
                    </div>
                </div>
            </> 
        )
    })
    
    return (
        <>
            <section id="section6" className="separation">
                <div id="titre-general">
                    <h4>Easy pricing</h4>
                    <h2>Pricing.</h2>
                    <span></span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum reiciendis quasi itaque, obcaecati atque sit!</p>
                </div>
                <div className="container-Perso cards-Section6">
                    {paquet}
                </div>
            </section>
        </>
    )
}
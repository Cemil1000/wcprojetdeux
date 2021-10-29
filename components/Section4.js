import {useState} from 'react';
import {AiOutlineSearch} from 'react-icons/ai'

export default function Section4() {

    const allCategories = ['All', 'Photography', 'Ios App', 'Development', 'Design']
    const items=[{
        id: 1,
        img: <img src="img/portfolio/portfolio-1.jpg" alt="Image ours polaire" />,
        titre:"AirBnB Postcard",
        category: ['Design']
      },
      {
        id: 2,
        img: <img src="img/portfolio/portfolio-2.jpg" alt="Logo avec un D" />,
        titre:"AirBnB Postcard",
        category: ['Ios App', 'Design']
      },
      {
        id: 3,
        img: <img src="img/portfolio/portfolio-3.jpg" alt="Manette Elite de Xbox" />,
        titre:"AirBnB Postcard",
        category: ['Photography', 'Development']
      },
      {
        id: 4,
        img: <img src="img/portfolio/portfolio-4.jpg" alt="Montgolfière" />,
        titre:"AirBnB Postcard",
        category: ['Photography', 'Ios App']
      },
      {
        id: 5,
        img: <img src="img/portfolio/portfolio-5.jpg" alt="Deux chaise et à manger" />,
        titre:"AirBnB Postcard",
        category: ['Design']
      },
      {
        id: 6,
        img: <img src="img/portfolio/portfolio-1.jpg" alt="Image ours polaire" />,
        titre:"AirBnB Postcard",
        category: ['Development', 'Design']
    }]

    const [menuItem, setMenuItem] = useState(items)
    const [buttons, setButtons] = useState(allCategories)
    const [activeButton, setActiveButton] = useState('All');

    const filter = (button, index) =>{
        setActiveButton(allCategories[index])
        if(button === 'All'){
            setMenuItem(items)
            return
        }

        const filteredData = items.filter(item => item.category.includes(button))
        setMenuItem(filteredData)
    }

    const menu = menuItem.map((item) =>{
        return (
            <>
                <div className="cardPortfolio" key={item.id}>
                    {item.img}
                    <div className="caption">
                        <a className="search-icon" href="#">
                            <AiOutlineSearch size={"35"} />
                        </a>
                        <h4><a href="#">{item.titre}</a></h4>
                    </div>
                </div>
            </>
        )
    })

    const button = buttons.map((cat, i) =>{
        return <button type="button" onClick={() => filter(cat ,i)} className={`${activeButton === allCategories[i] ? "active" : ""}`}>{cat}</button>
    })

    return (
        <>
        <section id="section4" className="separation">
            <div id="titre-general">
                <h4>RECENT WORK</h4>
                <h2>WORK SHOWCASE.</h2>
                <span></span>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
                    reiciendis quasi itaque, obcaecati atque sit!
                </p>
            </div>
            <div className="portfolio-filter">
                {button}
            </div>
            <div className="allCards">
                {menu}
            </div>
        </section>
        </>
    )
}
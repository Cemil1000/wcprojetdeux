import { AiOutlineMenu } from "react-icons/ai";
import {
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";

export default function Layout({ children }) {
  let iconStyles = { color: "white", fontSize: "1.5em" };
  
  return (
    <>
      <header>
        <div className="container">
          <Navbar bg="" expand="lg">{/* expand="lg" <=Burger Menu */}

            <Navbar.Brand href="#home">
              <img src="./img/logo.png" className="logo d-inline-block align-top"alt="Logo du site"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"> <AiOutlineMenu style={iconStyles} /> </Navbar.Toggle>{/* <=Burger Menu */}
            <Navbar.Collapse id="basic-navbar-nav"className="justify-content-end">
              <Nav.Link id="home" href="/">Home</Nav.Link>
              <Nav.Link href="/About">About</Nav.Link>
              <Nav.Link href="/Service">Service</Nav.Link>
              <Nav.Link href="/Portfolio">Portfolio</Nav.Link>
              <Nav.Link href="/Contact">Contact</Nav.Link>
              <NavDropdown title="Pages" id="basic-nav-dropdown">
              <NavDropdown.Item href="/Page_404">404</NavDropdown.Item>
              </NavDropdown>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </header>

      {children}

      <footer>
        <div className="container-Perso">
          <div>
            <h3>ABOUT</h3>
            <p>
              Integer posuere erat a ante venenati dapibus posuere velit
              aliquet. Fusce dapibus, tellus cursus commodo, tortor mauris sed
              posuere.
            </p>
          </div>

          <div>
            <h3>OUR SERVICE</h3>
            <a href="#">Graphic Design</a>
            <a href="#">Web Design</a>
            <a href="#">Web Development</a>
          </div>

          <div>
            <h3>QUICK LINKS</h3>
            <a href="#">Partners</a>
            <a href="#">About</a>
            <a href="#">FAQ’s</a>
            <a href="#">Badges</a>
          </div>

          <div>
            <h3>SUBSCRIBE NOW</h3>
            <input
              type="email"
              className="inputEmail"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            ></input>
            <button type="submit" className="btnFooter">
              Subscribe Now
            </button>
          </div>
        </div>

        <div className="copyright">
          <p className="pCopyright">
            COPYRIGHT 2018. ALL RIGHTS RESERVED. <br />
            Design And Developed By Themefisher.Com <br />
            Get More
            <span className="spanCopyright"> Free Bootstrap Templates </span>
          </p>
        </div>
      </footer>
    </>
  );
}

import './Navbar.css';
import NavBarImage from './assets/navbar.png';


function Navbar(props) {
  return (
    <div className="Navbar">
      <img className="image" src={NavBarImage} alt="nav_bar_img" ></img>
      <div className="navbar-links">
        <div className ="AboutMe" id="About">
          <a href="#Abou">About Me</a>
        </div>
        <div className="Experience" onClick={()=> console.log("plz")}>
          <a href="#Exp">Experience</a>
        </div>
        <div className ="Projects">
          <a href="#Proj">Projects</a>
        </div>
        <div className ="Contact">
          <a href="#Contacts">Contact</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
import './Contact.css';
import git from './assets/git.png';
import linked from './assets/linked.png';
import insta from './assets/insta.png';

function Contact(props) {
  return (
    <div className="Contact">
        <p className='Growth'> I am always looking for new opportunities to learn and grow, so please reach out! </p>
        <div className="connect"> 
            <a className="g" href="https://github.com/lilianarojas909"><img className="github" src={git}/></a>
            <a className="g" href="https://www.instagram.com/lilianarojax/"><img className="insta" src={insta}/></a>
            <a className="g" href="https://www.linkedin.com/in/liliana-rojasl/"><img className="linkedin" src={linked}/></a>
            {/* <img className="github" src={git} alt="nav_bar_img" ></img> */}
            {/* <img className="insta" src={insta} alt="nav_bar_img" ></img>
            <img className="linkedin" src={linked} alt="nav_bar_img" ></img> */}

            
            
          </div>
        <div className='ContactBackground'>
          email: lilirs909@berkeley.edu 
          
        </div>
    </div>
  );
}


export default Contact;
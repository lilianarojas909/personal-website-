import './Experience.css';
import Jane from './assets/Jane.png';
import EECS from './assets/EECS.png';
import Code from './assets/Code.png';
import Square from './assets/Square.png';

function Experience(props) {
  return (
    <div className="Experience">
      <h1 className="ExperienceHeader">Experiences</h1>
      <div className="Top">
        <div className="top-left"> 
        <div className="Inside-Top">
            <img className="Jane" src={Jane} ></img>
            <div className='Title'>
              <p>Jane Street FOCUS Program</p>
              <p>New York City, NY</p>
            </div>
          </div> 
          <div className='Paragraph-Body'>
            <p>Jane Street invited myself and 50 other students who identify with an underrepresented ethnic or racial minority group to meet and learn more about the trading, software engineering, and business development teams.</p>
          </div>
        </div>
        <div className="top-right"> 
        <div className="Inside-Top">
            <img className="Code" src={Code} ></img>
            <div className='Title'>
              <p>Codebase Project Developer</p>
              <p>New Berkeley, CA</p>
            </div>
          </div> 
          <div className='Paragraph-Body'>
            <p>Developing a web app to manage the communication for in-kind donations for the Berkeley Food and Housing Project.</p>
          </div>
        </div>
      </div>
      <div className="Bottom">
        <div className="bottom-left">
          <div className="Inside-Top">
            <img className="Square" src={Square} ></img>
            <div className='Title'>
              <p>Incoming Software Engineer <br></br> Intern @ Squarespace</p>
              <p>New York City, NY</p>
            </div>
          </div> 
          <div className='Paragraph-Body'>
            <p>Future backend software engineer at Squarespace for Summer 2023 in NYC.</p>
          </div>
          
        </div>
        <div className="bottom-right"> 
        <div className="Inside-Top">
            <img className="EECS" src={EECS} ></img>
            <div className='Title'>
              <p>Undergraduate Assistant</p>
              <p>Berkeley, CA</p>
            </div>
          </div> 
          <div className='Paragraph-Body'>
            <p>Jane Street invited myself and 50 other students who identify with an underrepresented ethnic or racial minority group to meet and learn more about the trading, software engineering, and business development teams.</p>
          </div>
        </div>
      </div>
      
    </div>
  );
}



export default Experience;
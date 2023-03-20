import './Project.css';
import Square from './assets/Square.png';

function Project(props) {
  return (
    <div className="Project">
        <h1 className="ProjectHeader">Projects</h1>
        <div className='ProjectBehind'>
            <div className='SideBar'>
                <div className='SideBar-Top'>
                <img className="SquareImage" src={Square} alt=""></img>
                </div>
                <div>
                    <p className='ProjectParagraph'> This project made me appreciate
backend development, which inspired me to apply to my upcoming internship. I really enjoyed the data processing aspect of the project and hope to continue growing my skills in this field! </p>
                </div>
            
            </div>
            <div className='ProjectDesc'>
                <h1>NHistory</h1>
                <p>● Built a browser-based backend tool for exploring the history of a word or phrase usage in English texts that accepted the user’s input and generated the appropriate display based off the data analysis of various files
                    <br></br>
                    ● Designed and constructed an algorithm backed by a tree-based data structures that utilized the map interface of Java to handle and clean extremely large data files</p>
            </div>
        </div>

    </div>
  );
}


export default Project;
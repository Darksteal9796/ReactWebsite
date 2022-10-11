import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function App() {
  return (
    <>
    <div className="main">
              <a name="home"></a>
    <div className="top-container ">
        <img className="gautamsm" src="gautam.png" alt=""/>
        <ul>

            <li><a href="#home"><b>Home</b></a></li>
            <li><a href="#about"><b>About</b></a></li>
            <li><a href="#skills"><b>Skills</b></a></li>
            <li><a href="#contact"><b>Contact</b></a></li>
        </ul>
        <img className="top-cloud " src="cloud.png " alt="cloud-image "/>
            <div className="dev">
            <h1><span className="I">I</span>'m <span className="D">D</span>arksteal</h1>
            <p><span className="web">a web developer</span></p>
            </div>
        <img className="bottom-cloud " src="cloud.png " alt="cloud-image "/>
        <img className="mountain " src="mountain.png " alt="mountain-image "/>
        <img className="rain" src="rain.gif" alt="rain gif"/>
    </div>

    <div className="middle-container">
        <a name="about"></a>
        <div className="profile">
            <img className="gautamimg" src="gautam.png" alt="gautam"/>
            <h2>Hello.</h2>
            <p className="tcs">Im a working employee at TCS , and I love coding.</p>
        </div>
        <hr/>
        <a name="skills"></a>
        <div className="skills">
            <h2>My Skills.</h2>
            <div className="skill-row1">
                <img className="pythonimg" src="python.png" alt="python image"/>

                <h3>python</h3>
                <p>Im a professional Python developer.,<br/>Python is one of the most uderfriendly language.<br/>Python also supports OOPs concepts.</p>
            </div>
            <hr className="sephr"/>
            <div className="skill-row2">
                <img className="sqlimg" src="sql.png" alt="sql image"/>

                <h3>SQL</h3>
                <p>SQL is a database management and manipulation language.<br/> It is generally used worldwide .<br/> It is easy to understand and to code.</p>
            </div>
        </div>
        <hr/>
        <a name="contact"></a>
        <div className="contact-me">
            <h2>Get In Touch</h2>
            <h3>IF you to love code you can connect with me.</h3>
            <p>Click here to mail me . </p>
            <a className="btn" href="mailto:gautam.joshi.9796@gmail.com.com">CONTACT ME</a>
        </div>
    </div>


    <div className="bottom-container">
        <div className="links">
            <a className="footer-link" href="https://www.linkedin.com/">LinkedIn</a>
            <a className="footer-link" href="https://twitter.com/">Twitter</a>
            <a className="footer-link" href="https://www.appbrewery.co/">Website</a>
            <p className="copy">© Gautam Joshi.</p>
        </div>
    </div>
    </div>

    </>
    
   
      );
}

export default App;

import "./style.css";
import '../../scss/grid.scss'
import '../../scss/cards.scss'
const Skills = () => {
  return (
    <div className="skills">
      <h1>Skills</h1>
      <div >
        <h2 className='skills-header'>Languages and Tools</h2>
        <div>
          <div className='row'>
            <div className='col-1-of-5'>
              <p>
              Python
              </p>
              <img src="https://img.icons8.com/color/96/000000/python.png"/>
            </div>
            <div className='col-1-of-5'>
            HTML
            <img src="https://img.icons8.com/color/96/000000/html-5--v1.png"/>
            </div>
            <div className='col-1-of-5'>
              <p>
              Javascript
              </p>
              <img src="https://img.icons8.com/color/96/000000/javascript.png"/>
            </div>
            <div className='col-1-of-5'>
              <p>
                React
                </p>
            <img src="https://img.icons8.com/color/96/000000/react-native.png"/></div>
            <div className='col-1-of-5'>
              <p>
                GCP
                </p>
            <img src="https://img.icons8.com/color/96/000000/google-cloud-platform.png"/></div>
            
          </div>
          <br/>
          <div className='row'>
            <div className='col-1-of-4'><p>
              CSS
              </p>
            <img src="https://img.icons8.com/color/96/000000/css3.png"/>
            </div>
            <div className='col-1-of-4'>
              <p>
                SASS
                </p>
            <img src="https://img.icons8.com/color/96/000000/sass.png"/></div>

            <div className='col-1-of-4'>
              <p>
                Java
                </p>
                
            <img src="https://img.icons8.com/color/96/000000/java-coffee-cup-logo.png"/></div>
            <div className='col-1-of-4'><p>
              Bootstrap
              </p>
              
            <img src="https://img.icons8.com/color/96/000000/bootstrap.png"/></div>
          </div>
        </div>
        <h2 className='skills-header' >Other Skills</h2>
        <div className = 'content last-row'>
        <span>Problem Solving</span>
          <span>Data structures and Algorithms</span>
          <span>Public speaking</span>
          <span>Event Management</span>
          <span>Version Control</span>
          <span>Tri-lingual</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;

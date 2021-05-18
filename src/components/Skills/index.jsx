import "./style.css";
const Skills = () => {
  return (
    <div className="skills">
      <h1>Skills</h1>
      <div >
        <h2 className='skills-header'>Languages and Tools</h2>
        <div>
          <div className='skills-row'>
            <div className='row-item'>
              <p>
                Python
              </p>
              <img src="https://img.icons8.com/color/96/000000/python.png" alt='python' />
            </div>
            <div className='row-item'>
              <p>
                HTML
              </p>
              <img src="https://img.icons8.com/color/96/000000/html-5--v1.png" alt='html' />
            </div>
            <div className='row-item'>
              <p>
                Javascript
              </p>
              <img src="https://img.icons8.com/color/96/000000/javascript.png" alt='js' />
            </div>
            <div className='row-item'>
              <p>
                React
                </p>
              <img src="https://img.icons8.com/color/96/000000/react-native.png" alt='react' /></div>
              <div className='row-item'>
              <p>
                Redux
                </p>
              <img src="https://img.icons8.com/color/96/000000/redux.png"alt='redux' /></div>
            <div className='row-item'><p>
              CSS
              </p>
              <img src="https://img.icons8.com/color/96/000000/css3.png" alt='css' />
            </div>
            <div className='row-item'>
              <p>
                SASS
                </p>
              <img src="https://img.icons8.com/color/96/000000/sass.png"alt='sass'  /></div>
            <div className='row-item'><p>
              Bootstrap
              </p>
              <img src="https://img.icons8.com/color/96/000000/bootstrap.png" alt='bootstrap' /></div>
              <div className='row-item'>
              <p>
                GCP
                </p>
              <img src="https://img.icons8.com/color/96/000000/google-cloud-platform.png" alt='gcp' /></div>
              <div className='row-item'>
              <p>
                Git
                </p>
              <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"alt='git' /> 
              </div>
            
            <div className='row-item'>
              <p>
                Java
                </p>
              <img src="https://img.icons8.com/color/96/000000/java-coffee-cup-logo.png"  alt='java'/></div>
          </div>
        </div>
        <h2 className='skills-header' >Other Skills</h2>
        <div className='other-skills'>
          <p>Problem Solving</p>
          <p>Data structures and Algorithms</p>
          <p>Public speaking</p>
          <p>Event Management</p>
          <p>Version Control</p>
          <p>Tri-lingual</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;

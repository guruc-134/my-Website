import "./style.css";
import '../../scss/grid.scss';
import '../../scss/feature.scss'
const About = () => {
  return (
    <div className="works">
        <h2 className='works-header'>Web Development Projects</h2>
        <section className="feature">
            <div className='row'>
                <div className="col-1-of-2 feature-box ">
                    <h3 className="heading-tertiary u-margin-bottom-small">
                        Study Timer and Scheduler
                    </h3>

                    <p className="feature-box-text">
                      An application which allows you to set goals and plan out study sessions.It displays the session goals at the end of 
                      the session for reviewing
                    </p>
                    <a className='featurelink' href='https://guruc-134.github.io/Study-Timer/'>Plan Now</a>

                </div>
                <div className="col-1-of-2 feature-box ">
                    <h3 className="heading-tertiary u-margin-bottom-small">
                        Chat Application
                    </h3>
                    <p className="feature-box-text">
                      A chat application which allows you to create rooms and chat with all the people who are logged into the web application. Login is made easy using google auth
                    </p>
                    <a className='featurelink' href='https://lets-chat134.web.app/'> Lets Chat</a>
                </div>
            </div>
            <div className="row">
                <div className="col-1-of-3 feature-box ">
                    <h3 className="heading-tertiary u-margin-bottom-small">
                        Bookmark keeper
                    </h3>
                    <p className="feature-box-text">An application which stores the links of various websites that are frequently visited.It has the feature of
                    adding and removing the bokmarks</p>
                    
                </div>
                <div className="col-1-of-3 feature-box ">
                    <h3 className="heading-tertiary u-margin-bottom-small">
                        Landing Page
                    </h3>

                    <p className="feature-box-text">A landing page build using concepts of advance CSS and SASS</p>
                    <p className="feature-box-text">Learnt / implemented concepts like animations, card flips,and other cool visual effects</p>
                    <a className='featurelink' href='https://guruc-134.github.io/CssProject_1/'> check it out</a>
                </div>
                <div className="col-1-of-3 feature-box ">
                    <h3 className="heading-tertiary u-margin-bottom-small">
                        Todo list
                    </h3>

                    <p className="feature-box-text">A Web App which helps you set a target of certain tasks and mark them completed once done</p>
                    <p className="feature-box-text">Filtering of tasks can also be done based on the status of completion.</p>
                </div>
            </div>
        </section>
      <h2 className='works-header'>Competitive Programming / DSA</h2>
      <h4><a className='work-link' href='https://binarysearch.com/@/Guruc134'>Binary Search</a></h4>
      <br/>
      <p>Level 91</p>
      <p>Top Contributor</p>
      <p>550 + problems solved</p>
      <p>220 + days streak</p>
      <h4><a  className='work-link' href='https://www.hackerrank.com/guruc134'>Hacker Rank</a></h4>
      <br/>
      <p>6⭐ Problem solving</p>
      <p>5⭐ Python</p>
      <p>5⭐ Java</p>
      <p>5⭐ C++</p>
      <p>4⭐ C</p>
      <p>4⭐ SQL</p>
      <h4><a  className='work-link' href='https://www.codechef.com/users/guruc134'>Code Chef</a></h4>
      <br/>
      <p>3⭐Code Chef</p>
      </div>
  );
};

export default About;

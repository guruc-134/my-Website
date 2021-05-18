import "./style.css";
const About = () => {
  return (
    <div className="works">
        <h1 className='works-header'>Web Development 🌐 
        Projects</h1>
        <section className="works-row">
                <div className="project-item">
                    <h3 className="project-title">
                        Chat Application
                    </h3>
                    <img className='project-img'src= {`${process.env.PUBLIC_URL}/project-pics/letsChat1.jpg`} alt='project'/>
                    <p className="project-description">
                        A chat application which allows you to create rooms and chat with all the people who are logged into the web application. Login is made easy using google auth
                    </p>
                    <a className='project-link' href='https://lets-chat134.web.app/'> Lets Chat</a>
                </div>
                <div className="project-item">
                    <h3 className="project-title">
                        Study Timer and Scheduler
                    </h3>
                    <img className='project-img'src= {`${process.env.PUBLIC_URL}/project-pics/studyTimer.jpg`} alt='project'/>
                    <p className="project-description">
                        An application which allows you to set goals and plan out study sessions.It displays the session goals at the end of 
                        the session for reviewing
                    </p>
                    <a className='project-link' href='https://guruc-134.github.io/Study-Timer/'>Plan Now</a>

                </div>
                <div className="project-item">
                    <h3 className="project-title">
                        Bookmark keeper
                    </h3>
                    <img className='project-img'src= {`${process.env.PUBLIC_URL}/project-pics/bookmarks.jpg`} alt='project'/>
                    <p className="project-description">An application which stores the links of various websites that are frequently visited. This project is featured in open source repo of "Awesome JavaScript Projects"</p>
                    <a className='project-link' href='https://vishal-raj-1.github.io/Awesome-JavaScript-Projects/public/bookmarks.html'>Visit Now</a>
                </div>
                <div className="project-item">
                    <h3 className="project-title">
                        Todo list
                    </h3>
                    <img className='project-img'src= {`${process.env.PUBLIC_URL}/project-pics/todolist.jpg`} alt='project'/>
                    <p className="project-description">A Web App which helps you set a target of certain tasks and mark them completed once done.
                    This is a simple tool that helps increase the productivity of the user through scientifically proven methods while maintaining a simple User Interface</p>
                <a className='project-link' href='https://guruc-134.github.io/Todo-List/'>Set Goals!!</a>
                </div>
                

                <div className="project-item">
                    <h3 className="project-title">
                        Skate Warehouse
                    </h3>
                    <img className='project-img'src= {`${process.env.PUBLIC_URL}/project-pics/SkateWareHouse.jpg`} alt='project'/>
                    <p className='project-description'>
                        A sample UI built for an e-commerce web application, This is a responsive web application
                    </p>
                    <a className='project-link' href='https://guruc-134.github.io/Skate-warehouse/'>Check it out</a>
                </div>
                <div className="project-item">
                    <h3 className="project-title">
                        Get Your Avatar
                    </h3>
                    <img className='project-img'src= {`${process.env.PUBLIC_URL}/project-pics/randomAvatar.jpg`} alt='project'/>
                    <p className='project-description'>
                    Get your Avatar is a simple application, which can be used as a funny way to find out what is the avatar corresponding to your name,
                        It can also be used by web developers directly inside their website through the "embedded HTML" feature.
                    </p>
                    <a className='project-link' href='https://guruc-134.github.io/React-Pokedex/'>Try now ! </a>
                </div>
                <div className="project-item">
                    <h3 className="project-title">
                        Pokēdex
                    </h3>
                    <img className='project-img'src= {`${process.env.PUBLIC_URL}/project-pics/pokedex.jpg`} alt='project'/>
                    <p className='project-description'>
                        An Web-application for pokemon lovers, it contains hundreds of pokemons along with their basic information, This app also allows the user to search a pokemon from the available collection of pokemons
                    </p>
                    <a className='project-link' href='https://guruc-134.github.io/React-Pokedex/'>Catch them all !!</a>
                </div>
                <div className="project-item">
                    <h3 className="project-title">
                        Random Quote Generator
                    </h3>
                    <img className='project-img'src= {`${process.env.PUBLIC_URL}/project-pics/randonQuote.jpg`} alt='project'/>
                    <p className='project-description'>
                    Finding it hard to think of Quotes to post in social media ? Check out this application which provides random quotes along with author name, it also has the feature that directs you to twitter in cases you want to tweet it
                    </p>
                    <a className='project-link' href='https://guruc-134.github.io/React-Pokedex/'>Get Inspired </a>
                </div>
                <div className="project-item">
                    <h3 className="project-title">
                        Advance Css project
                    </h3>
                    <img className='project-img'src= {`${process.env.PUBLIC_URL}/project-pics/cssProject.jpg`} alt='project'/>
                    <p className='project-description'>
                    A project made using Advance CSS and Sass, It has a theme of a tours site along with some skeletal text.This project has cool animations and smooth visual effects using pure css.
                    </p>
                    <a className='project-link' href='https://guruc-134.github.io/React-Pokedex/'>Visit now</a>
                </div>
        </section>
        <h2 className='works-header'>Competitive Programming / DSA 👨‍💻</h2>
        <section className='dsa-row' >

            <h4><a className='work-link' href='https://binarysearch.com/@/Guruc134'>Binary Search</a></h4>
            <br/>
            <p>Level 91</p>
            <p>Top Contributor</p>
            <p>550 + problems solved</p>
            <p>260 + days streak</p>
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
        </section>
      </div>
  );
};

export default About;

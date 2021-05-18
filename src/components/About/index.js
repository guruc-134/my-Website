import '../../scss/cards.scss'  
import './style.css'
const About = () => {
    return (
        <div className="about">
            <h1>Bio</h1>
        <span className='larger-text'> Hi<img src="https://github.com/AsishRaju/AsishRaju/raw/master/gifs/hi.gif" width="40px" alt='wave'></img> I am Guru Charan
    </span>
    
    <p className='about-text'>a second-year student in CSE, from GITAM University of Visakhapatnam.</p>
    I like to take up challenges and work my way through them.
    <p className='about-text' >I'm a firm believer of <b><em>‟ Knowledge is a treasure that increases when shared ” .</em></b></p>
    <p className='about-text'><b>some words of inspiration</b></p>
    <p className='about-text'>
"📖📖 Learning is a treasure that will follow its owner everywhere and the beautiful thing about learning is that nobody can take it away from you 🧠 Learning is the best investment we can make "</p>
    <p className='about-text'>I am a Web Developer , Competitive Programmer , Open Source Contributor and an Event Manager</p>

    <h2 className='header-secondary'>Experiences / Organizations <img src="https://img.icons8.com/fluent/96/000000/organization.png" alt='experience'/></h2>

            <div className="about-row">
                <div className="card">
                        <div className="card-1-back">
                            <h4 className="card-back-header">Activities Performed</h4>
                            <br/>
                            <p>
                                As a part of DSC GITAM, I have conducted hackathons, helped my team organize events which have promoted coding culture in our college. Im a problem setter for Hack 101 and an event facilitator.
                            </p>
                        </div>
                        <div className="card-1-front">
                            <h3 className="card-front-header"> Core Team GDSC</h3>
                            <h4 className="card-front-header-small">
                                Competitive Programming
                            </h4>
                            <p>Active member in the Core Team of DSC Gitam , Conducted hackathons and helped in the expansion of DSC Gitam</p>
                            <p>I aim to expand DSC at our campus and get many people to get interested in coding and create awareness about the new emerging technologies.
                            </p>
                            <span className='hover-msg'>
                                hover to know more....
                            </span>
                        </div>
                    </div>
                <div className="card">
                        <div className="card-2-back">
                            <h4 className="card-back-header">Activities Performed</h4>
                            <p>
                            I am an β Microsoft Learn Student Ambassador, with the main aim of sharing the knowledge with my peers and also learning from my mentors, thereby developing a sense of attachment towards the community. Hosted an event about " Getting started with Web Development 🌐 using Microsoft Technologies"
                            </p>
                        </div>
                        <div className="card-2-front">
                            <h4 className="card-front-header"> M L S A</h4>
                            <h4 className="card-front-header-small">
                                β Microsoft Learn Student Ambassador
                            </h4>
                            <br/>
                            <p>
                                Im a member of the "Mobile and Web Development" and "Education" communties in Microsoft Learn Student Ambassador community
                            </p>
                            <p>Conducted events as an Alpha - MLSA and created interst in students towards Web Development</p>
                                <span className='hover-msg'>
                                hover to know more....
                            </span>
                        </div>
                    </div>
                <div className="card">
                        <div className="card-1-back">
                            <h4 className="card-back-header">Activities Performed</h4>
                            <br/>
                            <p>
                                We at ACM aim to promote technical as well as non technical skills to the students.
                                Resource Personal are requested to give webinars to educate students on various technical concepts
                            </p>
                        </div>
                        <div className="card-1-front">
                            <h3 className="card-front-header"> Core Team ACM</h3>
                            <h4 className="card-front-header-small">
                                Event Manager
                            </h4>
                            <br/>
                            <p>
                                Event manager in ACM core Team.</p>
                            <p>
                                Member in team of  planners and organizers to who sure that the events of ACM are delivered without any error
                            </p>
                            <br/>
                            <span className='hover-msg'>
                                hover to know more....
                            </span>
                        </div>
                    </div>
                <div className="card">
                        <div className="card-2-back">
                            <h4 className="card-back-header">Activities Performed</h4>
                            <br/>
                            <p>
                                Partispated in the Opensource program Conducted by GirlScript Summer Of Code 2021;
                            </p>
                            <p>
                                Learnt about Version Control , Git and Github, making PR's and understandig Code bases
                            </p>
                        </div>
                        <div className="card-2-front">
                            <h4 className="card-front-header">GSSoC 202</h4>
                            <h4 className="card-front-header-small">
                                Contributor
                            </h4>
                            <br/>
                            <p>partispant in the opensource program by GSSoC </p>
                            <p>I contributed to the organizations NeoAlgo and Awesome JavaScript Projects</p>
                            <br/>
                                <span className='hover-msg'>
                                hover to know more....
                            </span>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-3-back">
                            <h4 className="card-back-header">Activities Performed</h4><br/>
                            <p>
                                Played a key role in introducing Coding Ninjas to the student community by facilitating, hackathons 
                                and Introductory sessions on Competitive Programming
                            </p>
                            <p>Promoted coding culture in our college</p>
                        </div>
                        <div className="card-3-front">
                            <h4 className="card-front-header">Coding Ninjas</h4>
                                <h4 className="card-front-header-small">
                                Student Chapter Lead
                                </h4>
                            <p>Helped Coding Ninjas to reach larger audience by conducting events and Hosting a hackathon, as a part of Coding Ninjas 4-month campaign</p><br/>
                            <span className='hover-msg'>
                                hover to know more....
                            </span>
                        </div>
                    </div>
                </div>
                </div>
    )
}

export default About

import React from 'react'
import { Link} from "react-router-dom";
import './style.css'
import './script.js'

const Home = () => {
  return (
    <div className="home">
      <div className="title">
          <h1><img src="https://github.com/AsishRaju/AsishRaju/raw/master/gifs/hi.gif" width="40px" alt = 'wave'/>Hi</h1>
        <h1 className='title-name'>I'm Guru Charan
        </h1>
        <h3>-
          <span
            className="txt-rotate"
            data-period="2000"
            data-rotate='[ "  Web Developer", "  Competitive Programmer", "  Open Source Contributor", "  Event Manager" ]'> Web developer</span></h3>  
        <Link to="about">
          <button>Know More</button>
        </Link>
      </div>
      <div className="person">
        <img
          src={`${process.env.PUBLIC_URL}/pic1.png`}
          alt="person"
          />
      </div>
    </div>
  );
};
export default Home;
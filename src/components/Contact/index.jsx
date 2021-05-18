import "./style.css";

const About = () => {
  return (  
    <div className="contact">
      <h1 className='contact-header'>Contact me:-</h1>
      <div className='contact-item'>
        <p>
          Phone Number:<img src="https://img.icons8.com/fluent/48/000000/phone.png" width='30px' alt='ph No'/>
          </p>
        <p> 9652488411</p>
      </div>

      <div className='contact-item'>
        <p>
          E-mail
        <img src="https://img.icons8.com/color/48/000000/apple-mail.png" width='30px' alt ='email'/>
          </p>
        <p> guruc134@gmail.com</p>
      </div>

      <div className='contact-item'>
        <p>
          Connect with me on linkedin
          </p>
      <a className="" href='https://www.linkedin.com/in/guru-charan-kakaraparty/'>
      <img src="https://img.icons8.com/fluent/48/000000/linkedin.png" width = '40px' alt='linkedin'/>
      </a>
      </div>
      <div className='contact-item'>
        <p>
          GitHub Profile
          </p>
      <a className='' href='https://github.com/guruc-134'>
      <img src="https://img.icons8.com/windows/64/000000/github.png" width = '40px' alt='git hub'/>
      </a>
      </div>
    </div>
  );
};

export default About;

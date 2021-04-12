import "./style.css";

const About = () => {
  return (
    <div className="contact">
      <h1 className='contact-header'>Contact me:-</h1>

        <img src="https://img.icons8.com/fluent/48/000000/phone.png" width='30px'/>
      <h4 className='contact-items'>
      <em>   9652488411</em>
      </h4>

        <img src="https://img.icons8.com/color/48/000000/apple-mail.png" width='30px'/>
      <h4 className='contact-items'>
      <em>   guruc134@gmail.com</em>
      </h4>
      <h4 className='contact-items-large-top'>
      <a className='contact-items-large-top'  href='https://www.linkedin.com/in/guru-charan-kakaraparty/'>
      <img src="https://img.icons8.com/fluent/48/000000/linkedin.png" width = '40px'/>
      </a>
      <a className='contact-items-large-top' href='https://github.com/guruc-134'>
      <img src="https://img.icons8.com/windows/64/000000/github.png" width = '40px'/>
      </a>
      </h4>
    </div>
  );
};

export default About;

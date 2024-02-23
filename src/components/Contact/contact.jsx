import React from 'react';
import './contact.css'; 
import Walmart from '../../assets/walmart.png';
import Adobe from '../../assets/adobe.png';
import Microsoft from '../../assets/microsoft.png';
import Facebook from '../../assets/facebook.png';
import FacebookIcon from '../../assets/facebook-icon.png';
import TwitterIcon from '../../assets/twitter.png';
import YoutubeIcon from '../../assets/youtube.png';
import Instagram from '../../assets/instagram.png'

const Contact = () => {
  return (
    <section id="contactPages">
        <div id="clients">
          <h1 className="contactPageTitle">My Clients</h1>
          <p className="clientDesc">I have had the opportunity to work with a diverse group of comapnies.
           Some of the notable companies I have worked with includes</p>
         <div className="clientImgs">
          <img src={Walmart} alt=""className='clientImg'/>
          <img src={Adobe} alt=""className='clientImg'/>
          <img src={Microsoft} alt=""className='clientImg'/>
          <img src={Facebook} alt=""className='clientImg'/>
          
          </div>  
         </div>
         <div id="contact">
         <h1 className="contactPageTitle">Contact Me</h1>
         <span className="contactDesc">Please fill out the form below to dicuss any work opportunities.</span>
         <form className="contactForm">
        <input type="text" className="name" placeholder='Your Name'/>
        <input type="email" className="email" placeholder='Your Email' />
        <textarea name="message" className="msg" rows="5" placeholder='Your message'></textarea>
        <button type='submit'value='Send'className="submitBtn">Submit</button>
        <div className="links">
        <a href="https://www.facebook.com"><img src={FacebookIcon} alt="Facebook" className="link" /></a>
        <a href="https://www.facebook.com"><img src={TwitterIcon} alt="Twitter" className="link" /></a>
        <a href="https://www.facebook.com"><img src={YoutubeIcon} alt="Youtube" className="link" /></a>
        <a href="https://www.instagram.com/_itz_me_official_inba?igsh=MTA0dHlvdm80ZjJ5cA=="><img src={Instagram} alt="Instagram" className="link" /></a>
        </div>

         </form>
</div>

    </section>
  )
}

export default Contact
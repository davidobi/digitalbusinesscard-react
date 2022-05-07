import React from 'react';
import '../assets/styles/Footer.css';
import { FacebookIcon, TwitterIcon, GithubIcon, InstagramIcon } from '../assets/icons';

const Footer = () => {
  return (
    <div className='Footer'>
      <img src={TwitterIcon} alt="twitter icon" />
      <img src={FacebookIcon} alt="facebook icon" />
      <img src={InstagramIcon} alt="instagram icon" />
      <img src={GithubIcon} alt="github icon" />
    </div>
  )
}

export default Footer;
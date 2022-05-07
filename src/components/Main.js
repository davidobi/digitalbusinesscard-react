import React from 'react';
import {ProfileImg, LinkedinImg, EmailImg} from '../assets/images';
import '../assets/styles/Main.css';

const Main = () => {
  return (
    <div className='MainContent'>
        <img src={ProfileImg} alt="" />
        <div className='MainContent'>
            <h1>David Obi</h1>
            <h3>Front End Developer</h3>
            <p>davidobi.website</p>
            <div className='Btn'>
                <button className='EmailBtn'><img src={EmailImg} alt="" /> Email</button>
                <button className='LinkedinBtn'> <img src={LinkedinImg} alt="" /> Linkedin</button>
            </div>
            
        </div>
        
    </div>
  )
}

export default Main
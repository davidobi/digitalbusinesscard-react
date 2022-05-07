import React from 'react';
import {ProfileImg, LinkedinImg, EmailImg} from '../assets/images';
import '../assets/styles/Main.css';

const Main = () => {
  return (
    <main>
        <div>
            <img src={ProfileImg} alt="" />
            <h1>David Obi</h1>
            <h3>Front End Developer</h3>
            <p>davidobi.website</p>
            <div className='Btn'>
                <button className='EmailBtn'><img src={EmailImg} alt="" /> Email</button>
                <button className='LinkedinBtn'> <img src={LinkedinImg} alt="" /> Linkedin</button>
            </div>
            
        </div>
        
    </main>
  )
}

export default Main
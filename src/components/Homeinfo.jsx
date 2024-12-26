import React from 'react'
import { Link } from 'react-router-dom';
import {arrow} from '../assets/icons'
const InfoBox = ({text, link, btnText }) => (
    <div className='info-box'>
        <p className="font-medium sm:text-xl text-center">{text}</p>
        <Link to={link} className=" neo-btn bg-white">
        {btnText}
        <img src={arrow} className='w-4 h-4 object-contain'/>
        </Link>
    </div>
)
const rendererContent ={
    1:(
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue 
        py-4 px-8 text-white mx-5'>
            Hi, I am <span className='font-semibold'>MOIZ MOHAMMED </span>👋<br />
            A <span>Front-End & Fullstack web developer</span>
        </h1>
    ),
    2:(
        <InfoBox text="I have worked in many languages
        and developed deep knowladge "
        link="/About"
        btnText="Learn more "/> 
    ),
    3:(
        <InfoBox text="I have worked in many languages
        and developed deep knowladge "
        link="/projects"
        btnText="Visit My Porjects "/> 
    ),
    4:(
        <InfoBox text="I have worked in many languages
        and developed deep knowladge "
        link="/Contact"
        btnText="Let's Talk "/> 
    ),
}


const Homeinfo = ({currentStage}) => {
  return rendererContent [currentStage] || null;
    
  
}

export default Homeinfo
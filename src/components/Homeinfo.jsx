import React from 'react'
const rendererContent ={
    1:(
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue 
        py-4 px-8 text-white mx-5'>
            Hi, I am <span className='font-semibold'>MOIZ MOHAMMED</span>
        </h1>
    ),
    2:(
        <h1>2</h1>
    ),
    3:(
        <h1>3</h1>
    ),
    4:(
        <h1>4</h1>
    ),
}

const InfoBox = ({text, link, btnText })=>(
    <div>
        {text}
    </div>
)
const Homeinfo = ({currentStage}) => {
  return rendererContent [currentStage] || null;
    
  
}

export default Homeinfo
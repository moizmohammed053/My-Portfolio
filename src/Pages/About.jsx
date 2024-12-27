import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { skills, experiences } from '../constants';
import CTA from '../components/CTA';
const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>Hello, I a'm <span className='blue-gradient_text font-semibold drop-shadow'>Moiz Ahmed</span>
</h1>
<div className='mt-5 flex-col gap-3 text-slate-500'>
  <p className='p-4'>
    I’m a full-stack developer with a passion for creating dynamic web applications and websites that make a difference. Specializing in developing seamless solutions for businesses of all sizes, I’m dedicated to building exceptional applications that improve lives. Whether it's a small business website or a large-scale application, I’m here to bring your ideas to life. What could you achieve with a developer just a fingertip away?
  </p>
  <button className='btn'>
        My Resume
      </button>
</div>
<div className='py-10 flex flex-col' >
  <h3 className='subhead-text'>My Skills</h3>
</div>

<div className='mt-16 flex flex-wrap gap-12'>
{skills.map((skill)=>(
  <div className='block-container w-20 h-20'>
    <div className='btn-back rounded-xl'/>
    <div className='btn-front rounded-xl flex justify-center items-center'>
      <img src={skill.imageUrl} alt={skill.name} className='w-1/2 h-1/2 object-contain' />
    </div>
  </div>
))}
</div>

<div className='py-16'>
  <h3 className='subhead-text'>My Education</h3>
  <div className='mt-5 flex-col gap-3 text-slate-500'>
  <p>
  I completed my Computer Applications degree at Osmania University, where I developed a strong foundation in programming, software development, and database management. During my studies, I gained proficiency in languages like Java, C++, and Python, while also learning systems analysis and software engineering principles. Additionally, my education at Conestoga College in the ITBA program equipped me with practical business analysis skills, including requirements gathering, process mapping, and project management, preparing me for real-world IT challenges.
  </p>
</div>
<div className='mt-12 flex'>
<VerticalTimeline>
  {experiences.map((experiences)=> (

    <VerticalTimelineElement
    key={experiences.company_name}
    date={experiences.date }
    icon={<div className='flex justify-center items-center w-full h-full'>
      {/* <img src={experiences.icon}
       alt={experiences.company_name}
       className='w-[60%] h-[60%] object-contain' /> */}
    </div>}
    iconStyle={{background: experiences.iconBg}}
    contentStyle={{
      borderBottom: '8px',
      borderStyle: 'solid',
      borderBottomColor: experiences.iconBg,
      boxShadow: 'none',

    }}>
      <div>
        <h3 className='text-black text-xl gap-2 font-poppins font-semibold'>
          {experiences.title}
        </h3>
        <p className='text-black-500 font-medium font-base' style={{margin:0}}>
          {experiences.company_name}
        </p>
        <ul className='my-5 list-disc ml-5 space-y-2'>
        {experiences.points.map((point, index)=> (
          <li key={`experience-point-${index}`}className='text-black-500/50 font-normal pl-1 text-sm'>
            {point}
          </li>
        ))}
        </ul>
      </div>
    </VerticalTimelineElement>
  ))}
  
  </VerticalTimeline>
</div>
</div>
<hr className='border-slate-200'/>
    <CTA/>
    </section>
  )
}

export default About
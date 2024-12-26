import React from 'react'
import { skills } from '../constants';
const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>Hello, I a'm <span className='blue-gradient_text font-semibold drop-shadow'>Moiz Ahmed</span>
</h1>
<div className='mt-5 flex-col gap-3 text-slate-500'>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing 
    elit. Suscipit at facere id debitis, nemo accusamus 
    nam commodi cupiditate officiis autem doloribus fuga
     quo officia dignissimos totam enim beatae molestiae
      quod!
  </p>
</div>
<div className='py-10 flex flex-col' >
  <h3 className='subhead-text'>My Skills</h3>
</div>

<div className='mt-16 flex flex-wrap gap-12'>

</div>
    </section>
  )
}

export default About
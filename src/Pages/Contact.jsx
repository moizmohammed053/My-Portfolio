import React, { Suspense, useRef, useState } from 'react';
import emailjs from '@emailjs/browser'
import { Canvas } from '@react-three/fiber';
import { Fox } from '../Models/Fox';
import { Loader } from '../components/Loader';
const Contact = () => {
  const formRef = useRef (null);
  const [form, setForm]= useState({name: '', email:'', message:''})
  const [isLoading, setisLoading]= useState(false);
  const handleChange = (e) => {
    setForm({...form, [e.target.name]:e.target.value})
  };
  const handleFocus = () => {};
  const handleBlur = () => {};
  const handleSubmit =(e) => {
    e.preventDefault();
    setisLoading(true);

    emailjs.send(
      'service_ibo6p22',
     'template_a3ero3k',
      
      {
        from_name:form.name,
        to_name:"Moiz",
        from_email: form.email,
        to_email: 'moiz05380@gmail.com',
        message: form.message
      },
      'MpuG1uV3Qci60gsdf'
     

    ).then(()=>{
      setisLoading(false);
    }).catch((error)=>{
      setisLoading(false);
      console.log(error);
    })
  };

  return (
    <section className="relative flex lg:flex-row flex-col max-container ">
      <div className='flex-1 min-w-[100%] flex flex-col'>
        <h1 className="head-text">Get In Touch</h1>
        <form className="w-full flex flex-col gap-7 mt-14"
        onSubmit={handleSubmit}
        >
          <label className='text-black-500 font-semibold'>Name</label>
          <input type="text" name="name" 
          className='input' placeholder='John' 
          required value={form.name} 
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          />
          <label className='text-black-500 font-semibold'>E-mail</label>
          <input type="email" name="email" 
          className='input' placeholder='john@gmail.com' 
          required value={form.email} 
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          />
          <label className='text-black-500 font-semibold'>Your Message</label>
          <textarea  name="message" 
          rows={4} className="textarea" placeholder='Let me know how I can help you!' 
          required value={form.message} 
          onChange={handleChange}
          
          onFocus={handleFocus}
          onBlur={handleBlur}
          />

          <button type='submit' className='btn' onFocus={handleFocus} onBlur={handleBlur}disabled={isLoading}>{isLoading ? 'Sending...' : 'Send Message'}</button>
        </form>
      </div>
      <div className='lgw-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
      <Canvas
      camera={{
        position:[0, 0, 5],
        fov:75,
        near:0.1,
        far:1000
      }}
      >
      <directionalLight intensity={2.5} position={[0, 0, 1]} />
        <Suspense fallback={<Loader />}>
          <Fox
          position={[ 0.5, 0.35, 0]}
          rotation={[12, 0, 0]}
          scale={[0.5, 0.5, 0.5]}
          />
        </Suspense>
      </Canvas>
      </div>
    </section>
  );
};

export default Contact;

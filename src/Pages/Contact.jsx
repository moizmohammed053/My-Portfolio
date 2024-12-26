import React, { useRef, useState } from 'react';

const Contact = () => {
  const formRef = useRef (null);
  const [form, setForm]= useState({name: '', email:'', message:''})
  const [isLoading, setisLoading]= useState(false);
  const handleChange = () => {};
  const handleFocus = () => {};
  const handleBlur = () => {};
  const handleSubmit =() => {};

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
    </section>
  );
};

export default Contact;

import React, {Suspense, useRef, useState} from 'react'
import emailjs  from '@emailjs/browser'
import { Canvas } from '@react-three/fiber';
import Fox from '../Models/Fox';
import Loader  from '../components/Loader';
import useAlert from '../hooks/useAlert';
const Contact = () => {
const formRef = useRef(null);
const [currentAnimation, setCurrentAnimation ]= useState('idle')
const [form, setForm] = useState({name: '', email: '',message: '' })
const [isLoading, setIsLoading] = useState(false);
const {alert, showAlert, hideAlert }=useAlert();
const handleChange =(e) =>{
    setForm({...form, [e.target.name]: e.target.value})
  };
  const handleFocus =(e) =>{
    e.preventDefault();
    setIsLoading(true);
setCurrentAnimation('hit');
    emailjs.send(
      'service_ibo6p22',
'template_a3ero3k',
{
  from_name:form.name,
  to_name:"moiz",
  from_email:form.email,
  to_email:'mohd.moiz@outlook.com',
  message: form.message

},
'MpuG1uV3Qci60gsdf',
    ).then(()=>{
      setIsLoading(false);
showAlert({show:true, text:'Message sent successfully!', type:'success'})
setTimeout(() => {
  hideAlert();
  setCurrentAnimation('idle')
  setForm ({name: '', email: '',message: '' });
}, [3000])

     
    }).catch((error)=>{
      setIsLoading(false);
      setCurrentAnimation('idle')
      showAlert({show:true, text:'I didnt receive your message!', type:'danger'})
      console.log(error);
    })
  };
  const handleBlur =() => setCurrentAnimation ('walk');
  const handleSubmit=()=> setCurrentAnimation ('idle');
  return (
    <section className='relative flex lg-flex-row flex-col max-container'>
      {alert.show && <alert{...alert} />}
          <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Get in Touch</h1>

        <form
          
          className='w-full flex flex-col gap-7 mt-14'
          onSubmit={handleSubmit}
        >
          <label className='text-black-500 font-semibold'>
            Name
            <input
              type='text'
              name='name'
              className='input'
              placeholder='John'
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Email
            <input
              type='email'
              name='email'
              className='input'
              placeholder='John@gmail.com'
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Your Message
            <textarea
              name='message'
              rows='4'
              className='textarea'
              placeholder='Write your thoughts here...'
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <button
            type='submit'
            disabled={isLoading}
            className='btn'
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
      <div className='lg:w-1/2 w-full lg:h-auto md:h-[500px] h-[350px]'>
      <Canvas 
      camera={{
        position:[0, 0, 4],
        fov: 75,
        near:0.1,
        far:1000
      }}
       >
        <directionalLight intensity={2.5} position={[0, 0, 1]}/>
        <ambientLight intensity={0.5}/>
        <Suspense fallback={<Loader />}>
          <Fox 
          currentAnimation={currentAnimation}
          position ={[1, 0.35, 0]}
          rrotation={[12.6, -0.6, 0]}
          scale={[0.6, 0.6, 0.6]}
          />
        </Suspense>
      </Canvas>
      </div>
    </section>
  )
}

export default Contact
// import React from 'react'
// import { Canvas } from '@react-three/fiber'
// import { Suspense } from 'react'
// import Loader from '../components/Loader'
// import Island  from '../Models/Island'
// {/* <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
//             POPUP
//         </div> */}
// const Home = () => {
//   return (
//     <section className="w-full h-screen relative">
//         <canvas 
//         className="w-full h-screen bg-transparent" 
//         camera={{ near:0.1, far:1000}}
//         >
// <Suspense fallback={<Loader />}>
// <directionalLight />
// <ambientLight />
// < pointLight />
// <spotLight />
// <hemisphereLight />
// <Island />
// </Suspense>
//         </canvas>

//     </section>
//   )
// }

// export default Home


// import { Canvas } from '@react-three/fiber';
// import { Suspense } from 'react';
// import Loader from '../components/Loader';
// import Island from '../Models/Island';

// const Home = () => {
//     const adjustIslandForScreenSize = () =>{
//         let screenScale = null;
//         let screenPosition =[0, -6.5, -43];
//         let rotation = [0.1, 4.7, 0];

//         if(window.innerWidth <768){
//             screenScale = [0.9, 0.9, 0.9];  
//         } else {
//             screenScale = [1, 1, 1];  
//         }
//         return [screenPosition, screenPosition, rotation];
//     }

//     const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();

//   return (
//     <section className="w-full h-screen relative">
//       <Canvas 
//         className="w-full h-screen bg-transparent" 
//         camera={{ near: 0.1, far: 1000 }}
//       >
//         <Suspense fallback={<Loader />}>
//           <directionalLight  />
//           <ambientLight  />
//           <pointLight  />
//           <spotLight />
//           <hemisphereLight />
//           <Island
//           position = {islandPosition}
//           scale = {islandScale}
//           rotation={islandRotation}
          
//           />
//         </Suspense>
//       </Canvas>
//     </section>
//   );
// };

// export default Home;

import { Canvas } from '@react-three/fiber';
import { Suspense, useState, useEffect } from 'react';
import Loader from '../components/Loader';
import Island from '../Models/Island';
import Sky from '../Models/Sky'
import Bird from '../Models/Bird';
import Plane from '../Models/Plane';

const Home = () => {
  const [islandSettings, setIslandSettings] = useState({
    scale: [1, 1, 1],
    position: [0, -6.5, -43],
    rotation: [0.1, 4.7, 0],
  });

  // Adjust the island settings based on screen size
  useEffect(() => {
    const adjustIslandForScreenSize = () => {
      const scale = window.innerWidth < 768 ? [0.9, 0.9, 0.9] : [1, 1, 1];
      const position = [0, -6.5, -43];
      const rotation = [0.1, 4.7, 0];
      setIslandSettings({ scale, position, rotation });
    };

    adjustIslandForScreenSize();
    window.addEventListener('resize', adjustIslandForScreenSize);

    return () => {
      window.removeEventListener('resize', adjustIslandForScreenSize);
    };
  }, []);

  return (
    <section className="w-full h-screen relative">
      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <ambientLight intensity={0.5} />
          <directionalLight  position ={[1, 1, 10]} intensity={2}/>
          <hemisphereLight skyColor="#b1e1ff" groundColor= "#000000"/>
          <Bird />
          <Plane />
          <Sky />
          

          <Island
            position={islandSettings.position}
            scale={islandSettings.scale}
            rotation={islandSettings.rotation}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;


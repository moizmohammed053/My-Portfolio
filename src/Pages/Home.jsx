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

// import { Canvas } from '@react-three/fiber';
// import { Suspense, useState, useEffect } from 'react';
// import Loader from '../components/Loader';
// import Island from '../Models/Island.jsx';
// import Sky from '../Models/Sky';
// import Bird from '../Models/Bird';
// import Plane from '../Models/Plane';

// const Home = () => {
//   const [isRotating, setIsRotating] = useState(false);
//   const [islandSettings, setIslandSettings] = useState({
//     scale: [1, 1, 1],
//     position: [0, -6.5, -43],
//     rotation: [0.1, 4.7, 0],
//   });
//   const [planeSettings, setPlaneSettings] = useState({
//     scale: [1, 1, 1],
//     position: [0, -4, -4],
//   });

//   // Adjust the island settings based on screen size
//   useEffect(() => {
//     const adjustSettingsForScreenSize = () => {
//       const islandScale = window.innerWidth < 768 ? [0.9, 0.9, 0.9] : [1, 1, 1];
//       const planeScale = window.innerWidth < 768 ? [1.5, 1.5, 1.5] : [1, 1, 1];
//       const planePosition = window.innerWidth < 768 ? [0, -1.5, 0] : [0, -4, -4];

//       setIslandSettings({
//         scale: islandScale,
//         position: [0, -6.5, -43],
//         rotation: [0.1, 4.7, 0],
//       });
//       setPlaneSettings({
//         scale: planeScale,
//         position: planePosition,
//       });
//     };

//     adjustSettingsForScreenSize();
//     window.addEventListener('resize', adjustSettingsForScreenSize);

//     return () => {
//       window.removeEventListener('resize', adjustSettingsForScreenSize);
//     };
//   }, []);

//   return (
//     <section className="w-full h-screen relative">
//       <Canvas
//         className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
//         camera={{ near: 0.1, far: 1000 }}
//       >
//         <Suspense fallback={<Loader />}>
//           <ambientLight intensity={0.5} />
//           <directionalLight position={[1, 1, 10]} intensity={2} />
//           <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" />
//           <Bird />
//           <Plane
//             isRotating={isRotating}
//             scale={planeSettings.scale}
//             position={planeSettings.position}
//             rotation={[0, 20, 0]}
//           />
//           <Sky />
//           <Island
//             position={islandSettings.position}
//             scale={islandSettings.scale}
//             rotation={islandSettings.rotation}
//             isRotating={isRotating}
//             setIsRotating={setIsRotating}
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
import Island from '../Models/Island'; // Ensure this matches the file name
import Sky from '../Models/Sky';
import Bird from '../Models/Bird';
import Plane from '../Models/Plane';

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, SetcurrentStage ]= useState(1)
  const [islandSettings, setIslandSettings] = useState({
    scale: [1, 1, 1],
    position: [0, -6.5, -43],
    rotation: [0.1, 4.7, 0],
  });
  const [planeSettings, setPlaneSettings] = useState({
    scale: [1, 1, 1],
    position: [0, -4, -4],
  });

  useEffect(() => {
    const adjustSettingsForScreenSize = () => {
      const islandScale = window.innerWidth < 768 ? [0.9, 0.9, 0.9] : [1, 1, 1];
      const planeScale = window.innerWidth < 768 ? [1.5, 1.5, 1.5] : [1, 1, 1];
      const planePosition = window.innerWidth < 768 ? [0, -1.5, 0] : [0, -4, -4];

      setIslandSettings({
        scale: islandScale,
        position: [0, -6.5, -43],
        rotation: [0.1, 4.7, 0],
      });
      setPlaneSettings({
        scale: planeScale,
        position: planePosition,
      });
    };

    adjustSettingsForScreenSize();
    window.addEventListener('resize', adjustSettingsForScreenSize);

    return () => {
      window.removeEventListener('resize', adjustSettingsForScreenSize);
    };
  }, []);

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-60 left-60 right-0 z-10 flex items-center">
POPUP
      </div>
      <Canvas
        className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[1, 1, 10]} intensity={2} />
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" />
          <Bird />
          <Plane
            isRotating={isRotating}
            scale={planeSettings.scale}
            position={planeSettings.position}
            rotation={[0, 20, 0]}
          />
          <Sky 
          isRotating ={isRotating}
          />
          <Island
            position={islandSettings.position}
            scale={islandSettings.scale}
            rotation={islandSettings.rotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={SetcurrentStage}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;

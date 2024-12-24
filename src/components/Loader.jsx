// import { html } from "@react-three/drei"

// const Loader = () => {
//   return (
//     <html>
//         <div className="flex justify-center items-center">
//         <div className='w-20 h-20 border-opacity-20 border-blue-500 boarder-t-blue-500 rounded-full animate-spin'/>
//     </div>
//     </html>
    
//   )
// }

// export default Loader

import { Html } from '@react-three/drei';

const Loader = () => {
  return (
    <Html center>
      <div className="flex justify-center items-center">
        <div className="w-20 h-20 border-4 border-opacity-20 border-blue-500 border-t-blue-500 rounded-full animate-spin" />
      </div>
    </Html>
  );
};

export default Loader;

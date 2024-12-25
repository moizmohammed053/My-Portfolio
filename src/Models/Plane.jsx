import React, { useEffect } from 'react'
import planeScene from '../assets/3d/Plane.glb'
import { useAnimations, useGLTF } from '@react-three/drei'


    const Plane =  ({isRotating, ...props}) => {
    const {scene, animations } = useGLTF(planeScene)
    const ref = useRef();
    const {actions } = useAnimations(animations, ref);

    useEffect(() =>{
      if(isRotating){
        
      }

    }, [actions, isRotating])
  return (
    <mesh {...props} ref = {ref}>
    < primitive object = {scene}/>
          </mesh>
  )
}

export default Plane
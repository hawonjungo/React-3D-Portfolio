import React from 'react'
import {useTexture} from "@react-three/drei";
import * as THREE from "three";

const Road = () => {
    const roadTexture = useTexture("/images/textures/mat1.png");



    return (
        <mesh rotation={[-Math.PI / 2, 0,0]} position={[-100,0,250]} >
            <planeGeometry args={[300, 600]} />



            <meshStandardMaterial map={roadTexture}   color="#aaaaaa"
                                  roughness={1}
                                  metalness={0}/>
        </mesh>
    );
}
export default Road

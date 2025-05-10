import * as THREE from 'three';

const HeroLight = () => {
    return (
       <>

          <spotLight position={[2, 4, 5]}       // Place above and to the side
                     angle={360}
                     intensity={100}            // Reasonable brightness
                     penumbra={0.5}             // Softer edges
                     color="white"

          />

           <spotLight position={[10, 0, 0]}
                      angle={0.3}
                      intensity={40}
                      penumbra={0.5}
                      color="#4cc9f0"
           />
           <spotLight position={[-3, 5, 5]}
                      angle={0.4}
                      intensity={60}
                      penumbra={1}
                      color="#9d4edd"
           />
           <primitive object={new THREE.RectAreaLight('##faffff',100,100,100)}
                      position={[15,15,15]}
                      intensity={150}
                      rotation={[-Math.PI/4,Math.PI/4,0]}
           />
           {/*<pointLight*/}
           {/*    position={[0, 1, 0]}*/}
           {/*    intensity={10}*/}
           {/*    color="#7209b7"*/}
           {/*/>*/}
           {/*<pointLight*/}
           {/*    position={[1, 2, -2]}*/}
           {/*    intensity={10}*/}
           {/*    color="#0d00a4"*/}
           {/*/>*/}
       </>
    )
}
export default HeroLight

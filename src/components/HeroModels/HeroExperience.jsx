import {Canvas} from "@react-three/fiber";
import {Center, OrbitControls} from '@react-three/drei'
import {useMediaQuery} from "react-responsive";
import {Room} from "./Room.jsx";
import HeroLight from "./HeroLight.jsx";
import {Suspense} from "react";
import Particles from "./Particles.jsx";
import {Island} from "./Island.jsx";
import {Zx6r} from "./Zx6r.jsx";
import {ToyotaGT86} from "./ToyotaGT86.jsx";
import {Leva, useControls} from "leva";


const HeroExperience = () => {
    const isMobile = useMediaQuery({query:"(max-width: 768px)"});
    const isTablet = useMediaQuery({query:"(max-width: 1024px)"});
    const x = useControls('ToyotaGT86',{
        positionX:{
                value:3,
                min:-360,
                max:360,
        },
        positionY:{
            value:3,
            min:-360,
            max:360,
        },
        positionZ:{
            value:3,
            min:-360,
            max:360,
        },
        rotationX:{
            value:0,
            min:-10,
            max:10,
        },
        rotationY:{
            value:0,
            min:-10,
            max:10,
        },
        rotationZ:{
            value:0,
            min:-10,
            max:10,
        },
        scale:{
            value:1,
            min:0.01,
            max:10,
        }
    })

    return (


            <Canvas camera={{position:[0, 0, 15],fov:45}} >
                <ambientLight intensity={0.3} color="white" />
                <directionalLight position={[5,5,5]} intensity={10}  />
                <OrbitControls enablePan={false}
                               enableZoom={!isTablet}
                               maxDistance={20}
                               minDistance={5}
                               minPolarAngle={Math.PI / 5}
                               maxPolarAngle={Math.PI / 2}
                               target={[0, 0, 0]}
                />

                <Suspense fallback={null}>

                    <HeroLight/>
                    <Particles count={100} />


                    <group className=""
                           scale={isMobile ? 0.02 : 0.02}
                           position={[0, -0.5, 0]}
                           rotation={[0, -Math.PI /4, 0]}
                    >
                        <Center>
                            <ToyotaGT86
                                        position={[x.positionX,x.positionY,x.positionZ]}
                                        rotation={[x.rotationX,x.rotationY,x.rotationZ]}
                                        scale={x.scale}/>
                        </Center>
                    </group>
                </Suspense>
            </Canvas>

    )
}
export default HeroExperience

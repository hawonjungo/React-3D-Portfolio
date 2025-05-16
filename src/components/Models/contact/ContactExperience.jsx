import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import IntroCamera from "../../HeroModels/IntroCamera.jsx";
import {useMediaQuery} from "react-responsive";
import {CatInBanana} from "./CatInBanana.jsx";
import {Letter} from "./Letter.jsx";

const ContactExperience = () => {

    const isMobile = useMediaQuery({query:"(max-width: 768px)"})
    return (
        <Canvas shadows camera={{ position: [0, 2.5, 5], fov: 40 }}>
            <ambientLight intensity={0.5} color="#fff4e6" />

            <directionalLight position={[5, 5, 3]} intensity={2.5} color="#ffd9b3" />

            <directionalLight
                position={[5, 9, 1]}
                castShadow
                intensity={2.5}
                color="#ffd9b3"
            />

            <OrbitControls
                enableZoom={false}
                minPolarAngle={Math.PI / 5}
                maxPolarAngle={Math.PI / 2}
            />

            <group scale={[1, 1, 1]}>
                <mesh
                    receiveShadow
                    position={[0, -4, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                >
                    <planeGeometry args={[30, 30]} />
                    <meshStandardMaterial color="#a46b2d" />
                </mesh>
            </group>
            <Letter scale={2} position={[-7,-4,4]} rotation={[0, Math.PI / 4, 0]} />
            <group scale={3} position={[0, -15, 0]} castShadow>

                <IntroCamera isMobile={isMobile} >

                    <CatInBanana />
                </IntroCamera>

            </group>
        </Canvas>
    );
};

export default ContactExperience;

import React, {useRef} from 'react'
import {useFrame} from "@react-three/fiber";
import {easing} from 'maath'

const IntroCamera = ({children,isMobile}) => {
    const groupRef = useRef();

    useFrame((state, delta) => {
        easing.damp3(state.camera.position, [0, 0, 20], 0.25, delta);

        if (!isMobile && groupRef.current) {
            const rotationY = state.pointer.x * 0.5;
            const rotationX = -state.pointer.y * 0.3;

            easing.dampE(
                groupRef.current.rotation,
                [rotationX, rotationY, 0],
                0.25,
                delta
            );
        }
    });


    return (
        <group ref={groupRef}>{children}</group>
    )
}
export default IntroCamera

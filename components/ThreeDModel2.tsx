// components/ThreeDModel.tsx
"use client"

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import {Object3D} from "three";

interface ModelProps {
    path: string;
}

const RotatingModel: React.FC<ModelProps> = ({ path }) => {
    const { scene } = useGLTF(path);
    const ref = useRef<Object3D>(null);

    useFrame(() => {
        if (ref.current) {
            ref.current.rotation.y += 0.003; // 自动旋转
        }
    });

    return <primitive ref={ref} object={scene} scale={0.003} />;
};

const ThreeDModel: React.FC = () => {
    return (
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <ambientLight intensity={1.5} />
            <pointLight position={[10, 10, 10]} />
            <RotatingModel path="/models/cats_on_a_fridge.glb" />
            <OrbitControls enableZoom={false} />
        </Canvas>
    );
};

export default ThreeDModel;

useGLTF.preload('/models/model.glb');
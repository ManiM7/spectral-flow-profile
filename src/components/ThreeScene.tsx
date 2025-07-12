import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Mesh } from 'three';

interface AnimatedMeshProps {
  position: [number, number, number];
  rotationSpeed: [number, number, number];
  color: string;
  type: 'sphere' | 'box' | 'torus';
}

const AnimatedMesh = ({ position, rotationSpeed, color, type }: AnimatedMeshProps) => {
  const meshRef = useRef<Mesh>(null!);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += rotationSpeed[0] * delta;
      meshRef.current.rotation.y += rotationSpeed[1] * delta;
      meshRef.current.rotation.z += rotationSpeed[2] * delta;
      
      // Add floating animation
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.1;
    }
  });

  const renderMesh = () => {
    const materialProps = {
      color: color,
      metalness: 0.7,
      roughness: 0.2,
      emissive: color,
      emissiveIntensity: 0.1,
    };

    switch (type) {
      case 'sphere':
        return (
          <mesh ref={meshRef} position={position}>
            <sphereGeometry args={[0.8, 32, 32]} />
            <meshStandardMaterial {...materialProps} />
          </mesh>
        );
      case 'box':
        return (
          <mesh ref={meshRef} position={position}>
            <boxGeometry args={[1.2, 1.2, 1.2]} />
            <meshStandardMaterial {...materialProps} metalness={0.8} roughness={0.1} />
          </mesh>
        );
      case 'torus':
        return (
          <mesh ref={meshRef} position={position}>
            <torusGeometry args={[1, 0.4, 16, 100]} />
            <meshStandardMaterial {...materialProps} metalness={0.6} roughness={0.3} />
          </mesh>
        );
      default:
        return null;
    }
  };

  return renderMesh();
};

const Scene = () => {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#9333ea" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3b82f6" />
      <spotLight
        position={[0, 10, 0]}
        angle={0.3}
        penumbra={1}
        intensity={1}
        color="#a855f7"
      />

      {/* Animated Meshes */}
      <AnimatedMesh
        position={[0, 0, 0]}
        rotationSpeed={[0.5, 1, 0.3]}
        color="#9333ea"
        type="sphere"
      />
      <AnimatedMesh
        position={[2.5, 1, -2]}
        rotationSpeed={[0.3, 0.5, 0.8]}
        color="#3b82f6"
        type="box"
      />
      <AnimatedMesh
        position={[-2.5, -1, 1]}
        rotationSpeed={[0.8, 0.3, 0.5]}
        color="#a855f7"
        type="torus"
      />

      {/* Controls */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </>
  );
};

interface ThreeSceneProps {
  className?: string;
}

const ThreeScene = ({ className = "" }: ThreeSceneProps) => {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        style={{ background: 'transparent' }}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default ThreeScene;
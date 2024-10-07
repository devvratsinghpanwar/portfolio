import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";

import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ IsMobile }) => {
  const { scene } = useGLTF("./nec/scene.gltf");

  useEffect(() => {
    scene.traverse((object) => {
      if (object.isMesh) {
        object.geometry.center(); // Ensure the pivot is at the center
      }
    });
  }, [scene]);

  return (
    <mesh>
      <hemisphereLight intensity={2} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={scene}
        scale={IsMobile ? 1.5 : 3.5} // Make it bigger
        position={[0, -3, 0]} // Adjust position if needed
        rotation={[0, 0, 0]} // Rotation stays the same
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [IsMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 5, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false }
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers IsMobile={IsMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};
export default ComputersCanvas;

import { ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import Dancer from "./Dancer";
import { Suspense } from "react";
import Loader from "./Loader";
import { useLoaderStore } from "../stores/loading";

function MainCanvas() {
  const { isEntered } = useLoaderStore();

  return (
    <>
      <Canvas
        id="canvas"
        gl={{ antialias: true }}
        shadows="pcfsoft"
        camera={{
          fov: 30,
          near: 0.01,
          far: 1000,
          position: [0, 6, 12]
        }}
        scene={{ background: new THREE.Color(0x000000) }}
      >
        <ScrollControls pages={isEntered ? 8 : 0} damping={0.25}>
          <Suspense fallback={<Loader />}>
            <Dancer />
          </Suspense>
        </ScrollControls>
      </Canvas>
    </>
  );
}

export default MainCanvas;
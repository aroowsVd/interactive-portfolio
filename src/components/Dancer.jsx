import { useAnimations, useGLTF } from "@react-three/drei";
import { useLoaderStore } from "../stores/loading";
import Loader from "./Loader";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";

let timeline;
function Dancer() {
  // loading store import
  const { isEntered } = useLoaderStore();
  const dancerRef = useRef(null);

  const { size } = useThree();
  // dancer gltf
  const { scene, animations } = useGLTF('/models/dancer.glb');
  const { actions } = useAnimations(animations, dancerRef);
  console.log(actions)

  const responsibleScale = useMemo(() => {
    const width = size.width;

    if(width < 480) return 0.018;
    if(width < 768) return 0.025;
    if(width < 1024) return 0.035;
    return 0.05
  }, [size.width]);

  useFrame(() => {
    if(!isEntered) return;
  });

  useEffect(() => {
    if(!isEntered) return;
    actions["hiphop02"]?.play();
  }, [isEntered, actions]);

  useEffect(() => {
    if(!isEntered) return;
    if(!dancerRef.current) return;

    timeline = gsap.timeline();
  }, [isEntered]);

  return isEntered ? (
    <>
      <primitive ref={dancerRef} object={scene} scale={responsibleScale} />
      <ambientLight intensity={2} />
      <rectAreaLight position={[0, 10, 0]} intensity={20} />
      <pointLight position={[0, 5, 0]} intensity={45} castShadow receiveShadow />
    </>
  ) : (
    <Loader isComplete />
  );
}

export default Dancer;
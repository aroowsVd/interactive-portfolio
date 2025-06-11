import { useGLTF } from "@react-three/drei";
import { useLoaderStore } from "../stores/loading";
import Loader from "./Loader";

function Dancer() {
  // loading store import
  const { isEntered } = useLoaderStore();

  // dancer gltf
  const { scene, animations } = useGLTF('/models/dancer.glb');

  return isEntered ? (
    <>
      <primitive object={scene} scale={0.05} />
      <ambientLight intensity={2} />
    </>
  ) : (
    <Loader isComplete />
  );
}

export default Dancer;
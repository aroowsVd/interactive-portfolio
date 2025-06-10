import { useLoaderStore } from "../stores/loading";

function Loader() {
  // loading store import
  const { isEntered, setIsEntered } = useLoaderStore();

  return (
    <></>
  );
}

export default Loader;
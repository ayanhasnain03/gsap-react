import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react";
gsap.registerPlugin(useGSAP);
const App = () => {
  const container = useRef();
  useGSAP(
    () => {
        // ✅ safe, created during execution, selector text scoped
        gsap.to('.box', { x: 100 });
    },
    { scope: container }
);
const onClick = () => {
  gsap.to('.box', { rotation: 360 });
}

  return (
  <>
<div ref={container} className=" flex items-center justify-center h-screen flex-col ">
<div className="box h-[4rem] w-[4rem] bg-red-300"></div>
<button className="rotate bg-black text-white p-1 mt-5 rounded" onClick={onClick}>Rotate</button>

</div>

  </>
  )
}
export default App
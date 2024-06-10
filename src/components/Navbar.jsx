import { useGSAP } from "@gsap/react"
import  gsap  from "gsap"
gsap.registerPlugin(useGSAP);
const Navbar = () => {
    useGSAP(
        () => {
          const tl = gsap.timeline();
          tl.from(".logo", {opacity:0,duration:1,ease:"power1.out"})
          .from(".links h1",{opacity:0,duration:0.5,ease:"power1.out", stagger:0.3})
          .from(".link-btn",{opacity:0,duration:0.5,ease:"power1.out", stagger:0.3})
        }
    );
  return (
    <div>
    <nav className="flex items-center justify-between px-8">
     <div>
       <h1 className="logo text-3xl font-bold ">Logo</h1>
     </div>
     <div className="links flex items-center  gap-8 ml-10 ">
       <h1>Home</h1>
       <h1>About</h1>
       <h1>Contact</h1>
       <h1>Blog</h1>
       <h1>Careers</h1>
       <h1>Services</h1>
       <h1>Projects</h1>
     </div>
     <div className="link-btn flex items-center justify-between gap-5">
       <button>Get Started</button>
       <button>Login</button>
       <button>Sign Up</button>
     </div>
    </nav>
     </div>
  )
}
export default Navbar
import { LuMountain } from "react-icons/lu";
import { Button } from "./ui/button";



export default function Navbar() {
    return (
        <nav className = "bg-secondary flex justify-between items-center p-12 shadow-sm w-full h-[60px] border-b-2 border-black">
         <div className="flex gap-x-2 pl-6 h-20 items-center">
           <LuMountain/>
           Medium
         </div>
         <div className="flex gap-x-6 items-center">
            <div className="hidden md:flex md:items-center gap-x-6">
            <div>Our Story</div>
            <div>Membership</div>
            <div>Write</div>
            <div>Signin</div>
            </div>
         
         <Button size={"lg"} className="rounded-3xl pr-6 ">
            Get Started
         </Button>
         </div>
         
      </nav>
    )
}
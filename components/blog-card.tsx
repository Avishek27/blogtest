import { HoverCardContent, HoverCardTrigger } from "@radix-ui/react-hover-card";
import { HoverCard } from "./ui/hover-card";
import { Button } from "./ui/button";

export default function BlogCard(){
    return (
        <div className=" bg-slate-500 flex justify-center items-center w-full">
            <div className="p-6 gap-y-4 items-center">
            <HoverCard>
                    <HoverCardTrigger asChild>
                       <Button variant={"link"}>Hover</Button>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80 border-2 border-black pl-10 ml-14">
                    <div className="flex justify-between space-x-4">
          
                    </div>
                    </HoverCardContent>
                </HoverCard>
                <h1 className="text-4xl p-4 font-bold">
                Lorem Ipsum is simply dummy text  
                </h1>
                <div className="p-4 ">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
                essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
                Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including 
                versions of Lorem Ipsum.

                </div>
                
            </div>
            <div className="p-6">
                Image
                </div>
        </div>
    )
}
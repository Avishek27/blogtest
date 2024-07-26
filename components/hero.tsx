import { Button } from "./ui/button";

export default function Hero() {
    return (
        <div className="bg-secondary w-full border-b-2 border-black h-full flex flex-col  justify-self-start">
            <div className="p-12 items-center gap-x-6 ml-5">
                <h2 className="font-bold text-6xl md:text-9xl mt-16">Human
                    <br></br>
                    Stories & ideas
                    </h2>
                <h3 className="flex text-3xl p-6 mt-20 ">A place to read, write, and deepen your understanding</h3>
                <Button size="lg" className="rounded-3xl mt-20 h-12 ml-3 text-xl">
                    Start Reading
                </Button>
            </div>
            
        </div>
    )
}
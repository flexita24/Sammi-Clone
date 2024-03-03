import { Button } from "@/components/ui/button"
import { FiGithub } from "react-icons/fi";

export const Card =()=>{
    return (
        <div className="rounded-md p-4 flex flex-col justify-between border">
            <h2 className="line-clamp-2 text-xl">Machine learning - TensorflowJS</h2>
            <Button className="inline-flex gap-2 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 px-4 py-2 mt-2 w-full h-12">
            <FiGithub className="w-4 h-4 "/>Kodni ko'rish
            </Button>
        </div>
    )
}
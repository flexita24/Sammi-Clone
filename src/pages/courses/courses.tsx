import { Button } from "@/components/ui/button"
import { AllCourses } from "./allCourses"

export const Courses = () => {
    return (
        <div className="pb-24 ">
            <h1 className="text-3xl  font-medium">Kurslar</h1>
            <div className="mt-4 flex flex-wrap gap-2">
                <Button className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3 py-2 text-sm opacity-80 bg-[#3b82f6]">Yangi</Button>
                <Button className="inline-flex text-white items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 py-2 text-sm opacity-80">Oldingi</Button>
                <Button className="inline-flex text-white items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 py-2 text-sm opacity-80">Mashhur</Button>
            </div>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {new Array(12).fill(4).map((_,index)=>(
                
                    <AllCourses key={index} />
                ))}
                </div>
        </div>
    )
}

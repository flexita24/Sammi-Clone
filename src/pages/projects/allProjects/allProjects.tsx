import { Link } from "react-router-dom"

export const AllProjects = () => {
    return (
        <div>
            <Link to="/projects/dfg">
                <div className="group col-span relative border-t pt-2">
                    <div className="relative w-full md:h-[150px] h-[220px]">
                        <img className="h-[150px] w-[363px]" src="https://sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F79dc1a37-4a40-4a87-b35c-50649a50661e-1rd4ri.png&w=1920&q=75" alt="" />
                        <div className="inline-flex items-center border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-[#3b82f6] text-primary-foreground hover:bg-primary/80 absolute left-0 bottom-0 rounded-md ">Full-Stack</div>
                    </div>
                    <h1 className="mt-2 text-xl font-bold line-clamp-1">Google Drive Clone</h1>
                    <div className="mt-2 flex flex-wrap gap-2">
                        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">NextJS</div>
                        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">React</div>
                        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">Firebase</div>
                        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">Stripe</div>
                        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">TypeScript</div>
                    </div>
                    <div className="opacity-0 absolute top-0 transition duration-200 z-10 invisible sm:visible delay-100 w-full scale-0 group-hover:scale-110 group-hover:-translate-y-[6vw] group-hover:translate-x-[2vw] group-hover:opacity-100">
                        <div className="relative w-full h-[150px]">
                            <img className="w-[363px] h-[150px]" src="https://sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F79dc1a37-4a40-4a87-b35c-50649a50661e-1rd4ri.png&w=1920&q=75" alt="" />
                        </div>
                        <div className="z-10 bg-secondary p-2 lg:p-2 absolute transition shadow-md rounded-b-md w-[313px]">
                            <div className="font-medium text-md">Google Drive Clone</div>
                            <p className="line-clamp-2 text-sm opacity-50">Google drive clone loyihasi o'zbek tilida. NextJS, Firebase, TypeScript, TailwindCSS, Shadcn UI, NodeJS, Clerk, Stripe. Full stack loyiha qilishni o'rganing va tajriba ortiring, ushbu loyiha sizga haqiqiy tajriba beradi. Fullstack loyiha o'zbek tilida.</p>
                            <p className="text-xl font-bold text-blue-500 mt-2">Bepul</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}
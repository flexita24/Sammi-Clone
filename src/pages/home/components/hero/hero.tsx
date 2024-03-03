import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export const Hero = () => {
    return (
        <section>
            <div className="flex items-center justify-between w-full md:p-8 p-4 dark:bg-gray-900 ">
                <div className="flex flex-col space-y-2 lg:w-1/2 w-full">
                    <h1 className="text-3xl font-semibold">
                        <span className="text-blue-500">TenX</span>
                        - dasturlash kurslari</h1>
                    <p>Amaliy dasturlash kurslari bilan to'la platformaga xush kelibsiz. Bu erda siz barcha pullik kurslarni bepul o'rganishingiz mumkin.</p>
                    <div className="grid grid-cols-2 gap-4">
                        <a href="/courses">
                            <Link to="/courses" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none dark:text-white disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 font-bold w-full">
                                Kurslar
                            </Link>
                        </a>
                        <a href="/projects">
                            <Link to="/projects" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50  text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 font-bold w-full bg-[#3b82f6]">
                                Loyihalar
                            </Link>
                        </a>
                    </div>
                    <p className="opacity-50 text-sm">* Kelajak hayotingiz uchun investitsiya qiling.</p>
                </div>
                <img alt="Hero" loading="lazy" width="300" height="300" decoding="async" data-nimg="1" className="hidden lg:flex" src="/react.svg" />
            </div>
        </section>
    )
}
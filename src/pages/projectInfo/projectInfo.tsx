import { LuCalendarRange, LuChevronsUpDown, LuDot, LuListOrdered } from "react-icons/lu"
import { MdOutlineOndemandVideo, MdOutlineVerified } from "react-icons/md"
import { Link } from "react-router-dom"

export const ProjectInfo = () => {
    return (
        <div className="mx-auto w-full max-w-6xl custom-scrollbar">
            <div className="w-full">
                <div className="flex items-center">
                    <Link to="/" className="font-medium hover:underline opacity-50 line-clamp-1">Bosh sahifa</Link>
                    <LuDot />
                    <Link to="/courses" className="font-medium hover:underline opacity-50 line-clamp-1">Kurslar</Link>
                    <LuDot />
                    <p className="ml-1 font-bold text-blue-500 line-clamp-1">Google drive - Clone</p>
                </div>
            </div>
            <div className="mt-6 flex flex-row gap-10 rounded-md bg-secondary p-4 lg:p-8">
                <div className="w-full lg:w-[60%]">
                    {/* <div className="relative block h-[200px] w-full lg:hidden">
                        <img className="duration-700 ease-in-out scale-100 blur-0 grayscale-0 rounded-lg object-cover"
                            src="https://sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F31fea751-8eaf-4034-8af8-e8ae50b6f863-sfstg7.png&w=1920&q=75" alt="" />
                    </div> */}
                    <h1 className="mt-4 lg:mt-0 font-medium text-3xl">Google drive - Clone</h1>
                    <p className="w-full opacity-50 text-[15px] mt-3">
                    Google drive clone loyihasi o'zbek tilida. NextJS, Firebase, TypeScript, TailwindCSS, Shadcn UI, NodeJS, Clerk, Stripe. Full stack loyiha qilishni o'rganing va tajriba ortiring, ushbu loyiha sizga haqiqiy tajriba beradi. Fullstack loyiha o'zbek tilida.
                    </p>
                    <div className="mt-10 flex flex-row gap-8 text-sm md:text-md">
                        <div className="text-blue-500">Davomiylik :
                            <span className="font-semibold"> 6 soat 14 daqiqa</span>
                        </div>
                        <div className="text-blue-500">Darslar soni :
                            <span className="font-semibold"> 12 ta</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-8 flex flex-row gap-8">
                <div className="w-full lg:w-[60%]">
                    <div className="rounded-md border bg-secondary p-6">
                        <h1 className="text-xl font-medium">Kursda nimalarni o'rgnasiz?</h1>
                        <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
                            <div className="flex gap-2">
                                <MdOutlineVerified className="fill-blue-500" fontSize={24} />
                                <p className="flex-1">Vue.js va Nuxt.js Frameworklarni</p>
                            </div>
                            <div className="flex gap-2">
                                <MdOutlineVerified className="fill-blue-500" fontSize={24} />
                                <p className="flex-1">TypeScript bilan integratsiya</p>
                            </div>
                            <div className="flex gap-2">
                                <MdOutlineVerified className="fill-blue-500" fontSize={24} />
                                <p className="flex-1">Pinia State Management</p>
                            </div>
                            <div className="flex gap-2">
                                <MdOutlineVerified className="fill-blue-500" fontSize={24} />
                                <p className="flex-1">Vue Query for Data Fetching</p>
                            </div>
                            <div className="flex gap-2">
                                <MdOutlineVerified className="fill-blue-500" fontSize={24} />
                                <p className="flex-1">Tailwind CSS Styling</p>
                            </div>
                            <div className="flex gap-2">
                                <MdOutlineVerified className="fill-blue-500" fontSize={24} />
                                <p className="flex-1">User Authentication and Authorization

                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gradient-to-r from-blue-500 mt-8 rounded-md p-4 lg:px-8 lg:py-4">
                        <h1 className="text-xl font-medium">Kurs kontenti</h1>
                        <div className="flex flex-row flex-wrap gap-6 mt-2">
                            <div className="flex flex-col">
                                <LuListOrdered fontSize={40} />
                                <p>Modullar soni</p>
                                <div className="text-2xl font-medium">1 ta</div>
                            </div>
                            <div className="flex flex-col">
                                <MdOutlineOndemandVideo fontSize={40} />
                                <p>Darslar soni</p>
                                <div className="text-2xl font-medium">12 ta</div>
                            </div>
                            <div className="flex flex-col">
                                <LuCalendarRange fontSize={40} />
                                <p>Kurs davomiyligi</p>
                                <div className="text-2xl font-medium">6 soat 14 daqiqa</div>
                            </div>
                        </div>
                        <div data-orientation="horizontal" role="none" className="shrink-0 bg-border h-[1px] w-full my-3" />
                        <div className="mt-4" data-orientation="vertical">
                            <div data-state="closed" data-orientation="vertical" className="border-b mt-1 border-none">
                                <h3 data-orientation="vertical" data-state="closed" className="flex">
                                    <button type="button" aria-controls="radix-:r13:" aria-expanded="false" data-state="closed" data-orientation="vertical" id="radix-:r12:" className="flex-1 font-medium transition-all [&amp;[data-state=open]>svg]:rotate-180 accordion-course flex w-full items-center justify-between p-4 hover:no-underline bg-gradient-to-r dark:from-gray-800 from-gray-100" data-radix-collection-item="">
                                        <div className="flex items-center gap-2">
                                            <LuChevronsUpDown />
                                            <div className="text-left text-[14px] font-semibold">
                                                1-Modul. NuxtJS asoslari
                                            </div>
                                        </div>
                                        <div className="hidden items-center text-sm lg:flex">
                                            <div>12 darslik</div>
                                            <LuDot />
                                            <div>6.14 soat</div>
                                        </div>

                                    </button>
                                </h3>
                                <div data-state="closed" id="radix-:r13:" role="region" aria-labelledby="radix-:r12:" data-orientation="vertical" className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"></div>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-md border bg-secondary p-4 lg:p-6 mt-8">
                        <h2 className="text-2xl font-medium">Kurs kim uchun?</h2>
                        <div className="mt-2">
                            <div className="mt-1 flex items-center">
                                <LuDot />
                                <p className="text-slate-400 flex-1">NuxtJS framewrokini o'rganishni istaganlar uchun</p>
                            </div>
                            <div className="mt-1 flex items-center">
                                <LuDot />
                                <p className="text-slate-400 flex-1">NuxtJS yordamida loyihalarga avtorizatsiyalarni qo'shishni o'rganishni istaganlar uchun</p>
                            </div>
                            <div className="mt-1 flex items-center">
                                <LuDot />
                                <p className="text-slate-400 flex-1">Ma'lumotlarni Vue Query yordamida fetch qilishni istagnlar uchun</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden lg:block lg:w-[40%]">
                    <div className="sticky top-32 rounded-md border p-6 shadow-[inset_0px_0px_10px_10px_#4299e1]">
                        <div className="text-xl">Kurs narxi</div>
                        <div className="text-3xl font-medium">Bepul</div>
                        <div className="flex flex-row flex-wrap gap-2 mt-2">
                            <p className="font-bold text-[#DD6B20]">4.3</p>
                            <div className="overflow: hidden; position: relative;">
                                <span className="" data-index="4" data-forhalf="★" >★</span>
                                <span className="" data-index="4" data-forhalf="★" >★</span>
                                <span className="" data-index="4" data-forhalf="★" >★</span>
                                <span className="" data-index="4" data-forhalf="★" >★</span>
                                <span className="" data-index="4" data-forhalf="★" >★</span>
                            </div>
                            <p className="font-bold">(3)</p>
                            <div className="ml-2">176 o'quvchi</div>
                        </div>
                        <div data-orientation="horizontal" role="none" className="shrink-0 bg-border h-[1px] w-full my-4"></div>
                        <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 w-full h-12 font-medium">Kirish</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
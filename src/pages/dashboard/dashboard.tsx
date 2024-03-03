import { Button } from "@/components/ui/button"
import { LuCalendarDays } from "react-icons/lu"
import { Link, useLocation } from "react-router-dom"
import { Categories } from "./categories/categories"

export const Dashboard = () => {
    const { pathname } = useLocation();
    return (
        <>
            <div className="mx-auto w-full max-w-6xl custom-scrollbar">
                <div className="flex w-full flex-col-reverse items-start justify-between sm:flex-row">
                    <div className="flex flex-col items-start gap-4 lg:flex-row">
                        <button>
                            <img className="rounded-full w-[140px] h-[140px]" src="https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yYzc3VlpDZ0ROR0RWakVPUDV4ZXdiSDgzQzIifQ?width=80" alt="" />
                        </button>
                        <div className="mt-3">
                            <h2 className="text-2xl font-medium">Jurayeva Mehriniso</h2>
                            <div className="mt-5 flex flex-wrap items-center justify-start gap-5">
                                <div className="flex items-center gap-1">
                                    <LuCalendarDays />
                                    <p className="paragraph-medium opacity-50">09 Fevral, 2024</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end max-sm:mb-5 max-sm:w-full sm:mt-3">
                        <Link to='/edit'
                            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 paragraph-medium min-h-[46px] min-w-[175px] bg-blue-500">
                            Profilni tahrirlash
                        </Link>
                    </div>
                </div>
                <div className="mt-10 flex max-w-full gap-10">
                    <div className="flex">
                        <div className="h-14 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground grid min-h-[120px] w-full grid-cols-2 gap-2 md:min-h-[30px] md:w-fit md:grid-cols-4">
                            {Categories.map((menu, index) => {
                                const active = menu.path === pathname;
                                return (
                                    <Link key={index} className="mb-4" to={menu.path}>
                                        <Button
                                            variant="secondary"
                                            className={`inline-flex gap-2  text-[#fff] items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background hover:bg-[#fff]  bg-[#fff] dark:bg-[#111827] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm tab w-full bg-transparent h-12 p-4 ${active ? "text-[#3b82f6] bg-[#0e172a] hover:bg-[#3b82f6]" : ""} `}
                                            key={index}
                                        >
                                            <div className="flex w-full items-center">
                                                {menu.icon}
                                                <span className="font-bold ml-2">{menu.name}</span>
                                            </div>
                                        </Button>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
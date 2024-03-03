import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { FaAngleLeft } from "react-icons/fa6";

export const EditProfile = () => {
    return (

        <div className="mx-auto  w-full max-w-6xl custom-scrollbar">
            <div className="flex items-end space-x-2">
                <Link className="flex gap-3" to="/dashboard">
                    <Button className="bg-inherit border hover:bg-gray-400"><FaAngleLeft className="text-[black] dark:text-[white]  size-4" /></Button>
                    <h1 className="text-2xl font-medium mt-1">Profilni tahrirlash</h1>
                </Link>
            </div>
            <div className="mt-4">
                <form className="mt-4 flex w-full flex-col gap-3">
                    <div className="space-y-2">
                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            To'liq ismingiz <span className="text-blue-500">*</span>
                        </label>
                        <input type="text" placeholder="Ismingiz" className="flex   h-10 w-full rounded-md border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 no-focus paragraph-regular min-h-[56px] border bg-secondary" />
                    </div>
                    <div className="space-y-2 ">
                        <label className="text-sm  font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Portfolio Link
                        </label>
                        <input type="text" placeholder="Portfolio URL" className="flex   h-10 w-full rounded-md border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 no-focus paragraph-regular min-h-[56px] border bg-secondary" />
                    </div>

                    <div className="space-y-2 ">
                        <label className="text-sm  font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Location
                        </label>
                        <input type="text" placeholder="Siz qayerdansiz?" className="flex   h-10 w-full rounded-md border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 no-focus paragraph-regular min-h-[56px] border bg-secondary" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Bio <span className="text-blue-500">*</span>
                            <textarea placeholder="O'zingiz haqingizda qisqacha?" className="flex w-full outline-none rounded-md border-input px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 no-focus paragraph-regular min-h-[150px] border bg-secondary"></textarea>
                        </label>
                    </div>
                    <div className="flex justify-end">
                        <Button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#3b82f6] text-primary-foreground hover:bg-[#256fe9] h-10 px-4 py-2 w-fit mt-3">Saqlash</Button>
                    </div>
                </form>

            </div>

        </div>
    )
}
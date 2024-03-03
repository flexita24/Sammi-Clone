import { Header } from "@/components/layouts/public/components"
import { Button } from "@/components/ui/button"
import { FaGithub } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
import { Link } from "react-router-dom"

export const Register = () => {
    return (
        <>
            <Header />
            <div className="flex min-h-screen flex-1 flex-col items-center bg-[#020817]  justify-center max-md:pb-14 pt-24">
                <div className="bg-[#19191a] w-[400px] h-[602px] rounded-3xl">
                    <div className="p-[40px]">
                        <div>
                            <h1 className="text-xl">Hisob yarating</h1>
                            <p className="text-gray-500 size-10 w-[300px]">"Sammi" da ishlashni davom ettirish uchun</p>
                        </div>
                        <div>
                            <div>
                                <Button className="bg-[#19191a] w-[325px] text-[wite] gap-3 mt-10  border hover:bg-gray-800 ">
                                    <span><FaGithub className="size-6" /></span>
                                    <div className="mr-14">
                                        <span>GitHub orqali davom etish</span>
                                    </div>
                                </Button>

                                <Button className="bg-[#19191a] text-[white] w-[325px]   gap-3    mt-3  border hover:bg-gray-800">
                                    <span className=" "><FcGoogle className="size-6" /></span>
                                    <div className="mr-14">
                                        <span>Google orqali davom etish</span>
                                    </div>
                                </Button>
                            </div>
                            <div className="flex mt-10">
                                <div className="w-[137px] mt-3   bg-gray-400 h-[1px]  ">
                                </div>
                                <p className=" ml-2 text-gray-500">yoki</p>
                                <div className="w-[137px] mt-3 ml-2 bg-gray-400 h-[1px] "></div>

                            </div>
                        </div>
                        <div className="flex gap-3">
                            <div className="">
                                <div>
                                    <label >Ism</label>
                                </div>
                                <input className="bg-[#19191a] border w-[159px] focus:outline-[blue] outline-none h-[37px] rounded-md" type="text" />
                            </div>
                            <div className="">
                                <div>
                                    <label >Familiya</label>
                                </div>
                                <input className="bg-[#19191a] border w-[159px] focus:outline-[blue] outline-none  h-[37px] rounded-md" type="password" />
                            </div>
                        </div>
                        <div>
                            <div className="">
                                <div>
                                    <label >Pochta</label>
                                </div>
                                <input className="bg-[#19191a] border w-[325px] focus:outline-[blue] outline-none h-[37px] rounded-md" type="text" />
                            </div>
                            <div className="">
                                <div>
                                    <label >Parol</label>
                                </div>
                                <input className="bg-[#19191a] border w-[325px] focus:outline-[blue] outline-none  h-[37px] rounded-md" type="password" />
                            </div>
                            <Button className="w-[325px] mt-5 h-[36px] bg-[#103fef] text-[white] hover:bg-[#0d2ea8] ">Davom etish</Button>
                        </div>
                        <div className="mt-4 ">
                            <div>Akkountingiz bormi?
                                <Link to="/login" className="ml-5  text-[#103fef]">Kirish</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
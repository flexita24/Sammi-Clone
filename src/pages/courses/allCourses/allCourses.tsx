import { Link } from "react-router-dom"


export const AllCourses = () => {
    return (
        <div>
            <Link to="/courses/yyyjuyju">
                <div className="group col-span relative border-t pt-2">
                    <div className="relative w-full md:h-[150px] h-[220px]">
                        <img className="h-[150px] w-[268px]" src="https://www.sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F31fea751-8eaf-4034-8af8-e8ae50b6f863-sfstg7.png&w=1920&q=75" alt="" />
                        <div className="inline-flex items-center border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-[#3b82f6] text-primary-foreground hover:bg-primary/80 absolute left-0 bottom-0 rounded-md ">Full-Stack</div>
                    </div>
                    <h1 className="mt-2 text-xl font-bold line-clamp-1">Nuxt JS</h1>
                    <div className="opacity-0 absolute top-0 transition duration-200 z-10 invisible sm:visible delay-100 w-full scale-0 group-hover:scale-110 group-hover:-translate-y-[6vw] group-hover:translate-x-[2vw] group-hover:opacity-100">
                        <div className="relative w-full h-[150px]">
                            <img className="w-[268px] h-[150px]" src="https://www.sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F31fea751-8eaf-4034-8af8-e8ae50b6f863-sfstg7.png&w=1920&q=75" alt="" />
                        </div>
                        <div className="z-10 bg-secondary p-2 lg:p-2 absolute transition shadow-md rounded-b-md w-[230px]">
                            <div className="font-medium text-md">Nuxt JS</div>
                            <p className="line-clamp-2 text-sm opacity-50">NuxtJS to'liq kurs o'zbek tilida, xozirgi kunda eng ommabob frameworklardan biri xisoblangan ushbu texnologiyani o'rganing. NuxtJS amaliy loyiha o'zbek tilida</p>
                            <p className="text-xl font-bold text-blue-500 mt-2">Bepul</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}




// export const AllCourses = [
//     {
//         img: "htps://sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F31fea751-8eaf-4034-8af8-e8ae50b6f863-sfstg7.png&w=1920&q=75",
//         category: "Full Stack",
//         title: "Nuxt JS",
//         info: "NuxtJS to'liq kurs o'zbek tilida, xozirgi kunda eng ommabob frameworklardan biri xisoblangan ushbu texnologiyani o'rganing. NuxtJS amaliy loyiha o'zbek tilida",
//         price: "Bepul",
//     },
//     {
//         img: 'https://sammi.ac/_next/image?url=https%3A%2F%2Futf…2d6-4784-8e7f-6c7ff0d65c01-ectn4b.png&w=1920&q=75',
//         category: "Sun'it intelekt",
//         title: "Tensortflow JS",
//         info: "Ushbu kursda siz TensorflowJS yordamida modellar yaratish va veb-ilovani yaratish uchun ularni ReactJS bilan integratsiya qilishni o'rganasiz. Sun'iy intellekt yordamida onlayn-do'kon yaratasiz. Kurs sizga Machine Learning va sun'iy intellektdan loyihalarda qanday foydalanish mumkinligini o'rgatadi.",
//         price: "Bepul",
//     },
//     {
//         img: 'https://sammi.ac/_next/image?url=https%3A%2F%2Futf…300-430f-b8b2-ff0fb57df056-kilw6p.png&w=1920&q=75',
//         category: "Front-End",
//         title: "Foundation (HTML CSS JS)",
//         info: "Foundation to'liq kurs o'zbek tilida. HTML, CSS, JavaScript (BEM), Bootstrap, SASS (SCSS) va amaliy loyihlar barchasi bitta kurs va asosiysi mutloqo bepul. O'zingizni birinchi web saytingizni yashashingiz mumkin va uni hosting joylashni ham sizga batafsil ma'lumot beramiz.",
//         price: "Bepul",
//     },
//     {
//         img: 'https://sammi.ac/_next/image?url=https%3A%2F%2Futf…e28-4fe1-86ce-964a5c89c78d-kilw7k.png&w=1920&q=75',
//         category: "Mobile",
//         title: "React Native",
//         info: "React Native-ni faqat real loyihalarga qaratilgan amaliy kursimiz bilan o'rganing. Amaliy, loyihaga asoslangan o'rganish orqali React Native-ni o'zlashtirib, mobil ilovalarni ishlab chiqishga sho'ng'ing. Karyerangizni bugun boshlang!",
//         price: "Bepul",
//     },
//     {
//         img: 'https://sammi.ac/_next/image?url=https%3A%2F%2Futf…afc-4cfe-8915-58a814e623da-kilw5u.png&w=1920&q=75',
//         category: "Full Stack",
//         title: "Next JS",
//         info: "NextJS to'liq kurs o'zbek tilida, xozirgi kunda eng ommabob frameworklardan biri xisoblangan ushbu texnologiyani o'rganing. NuxtJS amaliy loyiha o'zbek tilida",
//         price: "Bepul",
//     },
//     {
//         img: 'https://sammi.ac/_next/image?url=https%3A%2F%2Futf…eaf-4034-8af8-e8ae50b6f863-sfstg7.png&w=1920&q=75',
//         category: "Full Stack",
//         title: "Nuxt JS",
//         info: "NuxtJS to'liq kurs o'zbek tilida, xozirgi kunda eng ommabob frameworklardan biri xisoblangan ushbu texnologiyani o'rganing. NuxtJS amaliy loyiha o'zbek tilida",
//         price: "Bepul",
//     },
//     {
//         img: 'https://sammi.ac/_next/image?url=https%3A%2F%2Futf…2d6-4784-8e7f-6c7ff0d65c01-ectn4b.png&w=1920&q=75',
//         category: "Sun'it intelekt",
//         title: "Tensortflow JS",
//         info: "Ushbu kursda siz TensorflowJS yordamida modellar yaratish va veb-ilovani yaratish uchun ularni ReactJS bilan integratsiya qilishni o'rganasiz. Sun'iy intellekt yordamida onlayn-do'kon yaratasiz. Kurs sizga Machine Learning va sun'iy intellektdan loyihalarda qanday foydalanish mumkinligini o'rgatadi.",
//         price: "Bepul",
//     },
//     {
//         img: 'https://sammi.ac/_next/image?url=https%3A%2F%2Futf…300-430f-b8b2-ff0fb57df056-kilw6p.png&w=1920&q=75',
//         category: "Front-End",
//         title: "Foundation (HTML CSS JS)",
//         info: "Foundation to'liq kurs o'zbek tilida. HTML, CSS, JavaScript (BEM), Bootstrap, SASS (SCSS) va amaliy loyihlar barchasi bitta kurs va asosiysi mutloqo bepul. O'zingizni birinchi web saytingizni yashashingiz mumkin va uni hosting joylashni ham sizga batafsil ma'lumot beramiz.",
//         price: "Bepul",
//     },
//     {
//         img: 'https://sammi.ac/_next/image?url=https%3A%2F%2Futf…e28-4fe1-86ce-964a5c89c78d-kilw7k.png&w=1920&q=75',
//         category: "Mobile",
//         title: "React Native",
//         info: "React Native-ni faqat real loyihalarga qaratilgan amaliy kursimiz bilan o'rganing. Amaliy, loyihaga asoslangan o'rganish orqali React Native-ni o'zlashtirib, mobil ilovalarni ishlab chiqishga sho'ng'ing. Karyerangizni bugun boshlang!",
//         price: "Bepul",
//     },
//     {
//         img: 'https://sammi.ac/_next/image?url=https%3A%2F%2Futf…afc-4cfe-8915-58a814e623da-kilw5u.png&w=1920&q=75',
//         category: "Full Stack",
//         title: "Next JS",
//         info: "NextJS to'liq kurs o'zbek tilida, xozirgi kunda eng ommabob frameworklardan biri xisoblangan ushbu texnologiyani o'rganing. NuxtJS amaliy loyiha o'zbek tilida",
//         price: "Bepul",
//     },
//     {
//         img: 'https://sammi.ac/_next/image?url=https%3A%2F%2Futf…eaf-4034-8af8-e8ae50b6f863-sfstg7.png&w=1920&q=75',
//         category: "Full Stack",
//         title: "Nuxt JS",
//         info: "NuxtJS to'liq kurs o'zbek tilida, xozirgi kunda eng ommabob frameworklardan biri xisoblangan ushbu texnologiyani o'rganing. NuxtJS amaliy loyiha o'zbek tilida",
//         price: "Bepul",
//     },
//     {
//         img: 'https://sammi.ac/_next/image?url=https%3A%2F%2Futf…2d6-4784-8e7f-6c7ff0d65c01-ectn4b.png&w=1920&q=75',
//         category: "Sun'it intelekt",
//         title: "Tensortflow JS",
//         info: "Ushbu kursda siz TensorflowJS yordamida modellar yaratish va veb-ilovani yaratish uchun ularni ReactJS bilan integratsiya qilishni o'rganasiz. Sun'iy intellekt yordamida onlayn-do'kon yaratasiz. Kurs sizga Machine Learning va sun'iy intellektdan loyihalarda qanday foydalanish mumkinligini o'rgatadi.",
//         price: "Bepul",
//     },
//     {
//         img: 'https://sammi.ac/_next/image?url=https%3A%2F%2Futf…300-430f-b8b2-ff0fb57df056-kilw6p.png&w=1920&q=75',
//         category: "Front-End",
//         title: "Foundation (HTML CSS JS)",
//         info: "Foundation to'liq kurs o'zbek tilida. HTML, CSS, JavaScript (BEM), Bootstrap, SASS (SCSS) va amaliy loyihlar barchasi bitta kurs va asosiysi mutloqo bepul. O'zingizni birinchi web saytingizni yashashingiz mumkin va uni hosting joylashni ham sizga batafsil ma'lumot beramiz.",
//         price: "Bepul",
//     },
//     {
//         img: 'https://sammi.ac/_next/image?url=https%3A%2F%2Futf…e28-4fe1-86ce-964a5c89c78d-kilw7k.png&w=1920&q=75',
//         category: "Mobile",
//         title: "React Native",
//         info: "React Native-ni faqat real loyihalarga qaratilgan amaliy kursimiz bilan o'rganing. Amaliy, loyihaga asoslangan o'rganish orqali React Native-ni o'zlashtirib, mobil ilovalarni ishlab chiqishga sho'ng'ing. Karyerangizni bugun boshlang!",
//         price: "Bepul",
//     },
//     {
//         img: 'https://sammi.ac/_next/image?url=https%3A%2F%2Futf…afc-4cfe-8915-58a814e623da-kilw5u.png&w=1920&q=75',
//         category: "Full Stack",
//         title: "Next JS",
//         info: "NextJS to'liq kurs o'zbek tilida, xozirgi kunda eng ommabob frameworklardan biri xisoblangan ushbu texnologiyani o'rganing. NuxtJS amaliy loyiha o'zbek tilida",
//         price: "Bepul",
//     },
// ]

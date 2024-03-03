import { LuCode, LuCrown, LuFolderArchive, LuListOrdered } from "react-icons/lu"

export const Categories = [
    {
      name: "Mening kurslarim",
      icon: <LuListOrdered size={"1.5em"} className="w-6 h-6" />,
      path: "/dashboard/mycourses",
    },
    {
      name: "Mening loyihalarim",
      icon: <LuCode size={"1.5em"} className="w-6 h-6" />,
      path: "/dashboard/myprojects",
    },
    {
      name: "Sevimli",
      icon: <LuCrown size={"1.5em"} className="w-6 h-6" />,
      path: "/dashboard/myfavourite",
    },
    {
      name: "Arxiv",
      icon: <LuFolderArchive size={"1.5em"} className="w-6 h-6" />,
      path: "/dashboard/archived",
    },
  ];
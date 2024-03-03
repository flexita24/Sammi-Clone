import { LuBrackets, LuFolderKanban, LuGauge, LuHome, LuSquareCode } from "react-icons/lu";

export const LINKS = [
  {
    label: "Bosh sahifa",
    icon: <LuHome className="w-6 h-6" />,
    path: "/",
  },
  {
    label: "Barcha kurslar",
    icon: <LuBrackets className="w-6 h-6" />,
    path: "/courses",
  },
  {
    label: "Loyihalar",
    icon: <LuFolderKanban className="w-6 h-6" />,
    path: "/projects",
  },
  {
    label: "Kod Manbalari",
    icon: <LuSquareCode className="w-6 h-6" />,
    path: "/source-codes",
  },
  {
    label: "Dashboard",
    icon: <LuGauge className="w-6 h-6" />,
    path: "/dashboard",
  },
];
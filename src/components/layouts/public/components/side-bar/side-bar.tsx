import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { LINKS } from "./constants/sidebar";

export const SideBar = () => {
  const { pathname } = useLocation();
  return (
    <aside className="fixed z-10 border-r top-0 left-0 h-screen w-[300px] dark:bg-[#111827]">
      <div className="pt-[128px] px-6">
        <div className="flex flex-col gap-4">
          {LINKS.map((menu, index) => {
            const active = menu.path === pathname;
            return (
              <Link key={index} className="mb-4" to={menu.path}>
                <Button
                  variant="secondary"
                  className={`w-full bg-transparent h-12 p-4 ${active ? "bg-[#3b82f6] text-[#0e172a] hover:bg-[#3b82f6]" : ""} `}
                  key={index}
                >
                  <div className="flex w-full items-center">
                    {menu.icon}
                    <span className="font-bold ml-2">{menu.label}</span>
                  </div>
                </Button>
              </Link>
            );
          })}
        </div>
      </div>
    </aside>
  );
};
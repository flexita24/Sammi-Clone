import { useTheme } from "@/components/mode/theme-provider";
import { Button } from "@/components/ui/button";
import { LuContact, LuMoon, LuSun } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";

export const Header = () => {
  const { setTheme, theme } = useTheme();

  const navigate = useNavigate();

  return (
    <header className="flex fixed top-0 left-0 z-[999] border-b justify-between items-center w-full h-[74px] px-[48px] dark:bg-[#111827]">
      <Link to="/">
        <h2>Tenx Academy</h2>
      </Link>
      <div className="flex space-x-2">
        <Button variant="secondary" className="bg-transparent">
          <Link to="/contact" >
          <LuContact size={"1rem"} />
          </Link>
        </Button>
        <Button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          variant="secondary"
          className="bg-transparent"
        >
          {theme === "dark" ? (
            <LuSun size={"1rem"} />
          ) : (
            <LuMoon />
          )}
        </Button>
        <Button onClick={()=>navigate("/login")} className="bg-[#3b82f6] font-semibold">Kirish</Button>
      </div>
    </header>
  );
};
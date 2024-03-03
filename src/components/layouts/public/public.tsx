import { Header, SideBar } from "./components";
import { Props } from "./types";

export const PublicLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <div className="pl-[356px] pt-[128px] pr-[56px]">{children}</div>
      <SideBar />
    </>
  );
};
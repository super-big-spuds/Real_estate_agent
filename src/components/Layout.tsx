import { useEffect } from "react";
import Menu from "./Menu";
import { Outlet, useNavigate } from "react-router-dom";
export default function Layout() {
  // const route = useNavigate();
  // TODO 這裡要改成登入頁面
  // useEffect(() => {
  //   route("/collections");
  // }, []);

  return (
    <div className="flex h-full min-h-screen bg-gray-300 ">
      <Menu />
      <Outlet />
    </div>
  );
}

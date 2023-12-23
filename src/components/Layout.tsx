import { useEffect } from "react";
import Menu from "./Menu";
import { Outlet, useNavigate } from "react-router-dom";
export default function Layout() {
  // const route = useNavigate();

  // useEffect(() => {
  //   route("/Collection/List");
  // }, []);

  return (
    <div className="flex h-full min-h-screen bg-gray-300 ">
      <Menu />
      <Outlet />
    </div>
  );
}

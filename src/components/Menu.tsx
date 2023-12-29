import React from "react";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuProps["items"] = [
  getItem("代收付管理", "collectionmange", undefined, [
    getItem("代收付管理列表", "collections"),
    getItem("代收付管理新增", "Collection/Add"),
  ]),
  getItem("房屋管理", "tenementmange", undefined, [
    getItem("房屋管理列表", "Tenements"),
    getItem("房屋管理新增", "Tenement/Add"),
  ]),
  getItem("提醒月曆", "calendarmange", undefined, [
    getItem("提醒月曆列表", "Calenderlist"),
  ]),
  getItem("使用者管理", "usermange", undefined, [
    getItem("使用者管理列表", "users"),
    getItem("使用者管理新增", "user"),
  ]),
];

const App: React.FC = () => {
  // use navigate to change route
  const navigate = useNavigate();

  const onClick: MenuProps["onClick"] = (e) => {
    if (e.key && e.key.toString() !== "") {
      navigate("/" + e.key.toString());
    }
  };

  return (
    <Menu
      onClick={onClick}
      style={{ width: 256 }}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
      items={items}
      className="sticky top-0 h-screen pt-20 bg-blue-100 "
    />
  );
};

export default App;

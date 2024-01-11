import React from "react";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../providers/Authprovider";

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
    getItem("出租列表", "Tenements/Rent"),
    getItem("出售列表", "Tenements/Sell"),
    getItem("房屋管理列表", "Tenements"),
    getItem("房屋管理新增", "Tenement/Add"),
  ]),
  getItem("提醒月曆", "calendarmange", undefined, [
    getItem("提醒事項列表", "Calenderlist"),
    getItem("代收付提醒列表", "Calenderlist_collection"),
  ]),
  getItem("使用者管理", "usermange", undefined, [
    getItem("使用者管理列表", "users"),
    getItem("使用者管理新增", "user"),
  ]),
];

const Menus = () => {
  const navigate = useNavigate();
  const { isAdmin } = useAuth();
  if (!isAdmin) {
    items.splice(3, 1);
  }

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

export default Menus;

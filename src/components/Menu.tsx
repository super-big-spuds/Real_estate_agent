import React from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}



const items: MenuProps['items'] = [
  getItem('代收付管理', 'collection', undefined, [
    getItem('代收付管理列表', 'Collection/List'),
    getItem('代收付管理新增', 'Collection/Add'),
  ]),
  getItem('房屋管理', 'house', undefined, [
    getItem('房屋管理列表', 'house-list'),
    getItem('房屋管理新增', 'house-add'),
  ]),
  getItem('提醒月曆', 'calendar', undefined, [
    getItem('提醒月曆列表', 'calendar-list'),
    getItem('提醒月曆新增', 'calendar-add'),
  ]),
  getItem('使用者管理', 'user', undefined, [
    getItem('使用者管理列表', 'user-list'),
    getItem('使用者管理新增', 'user-add'),
  ]),

];

const App: React.FC = () => {
  // use navigate to change route
  const navigate = useNavigate();
  
  const onClick: MenuProps['onClick'] = (e) => {
    if (e.key && e.key.toString() !== '') {
      navigate('/' + e.key.toString());
    }
    
  };

  return (
    <Menu
      onClick={onClick}
      style={{ width: 256 }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
      className='pt-20 '
    />
  );
};

export default App;
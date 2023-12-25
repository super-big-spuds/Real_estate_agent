import { Routes, Route } from "react-router-dom";
import CollectionList from "../pages/collection/CollectionList";
import CollectionAdd from "../pages/collection/CollectionAdd";
import CollectionEdit from "../pages/collection/CollectionEdit";
import UserAdd from "../pages/user/UserAdd";
import UserEdit from "../pages/user/UserEdit";
import UserList from "../pages/user/UserList";
import Layout from "../components/Layout";
import CalenderList from "../pages/calender/CalenderList";
import TenementAdd from "../pages/tenement/TenementAdd";
import TenementEdit from "../pages/tenement/TenementEdit";
import TenementList from "../pages/tenement/TenementList";

export const App = () => (
  <div className="w-full h-full ">
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="collections" element={<CollectionList />} />
        <Route path="Collection/:id" element={<CollectionEdit />} />
        <Route path="Collection/Add" element={<CollectionAdd />} />
        <Route path="users" element={<UserList />} />
        <Route path="User/:user_id" element={<UserEdit />} />
        <Route path="user" element={<UserAdd />} />
        <Route path="Calenderlist" element={<CalenderList />} />
        <Route path="Tenement/Add" element={<TenementAdd />} />
        <Route path="Tenement/:id" element={<TenementEdit />} />
        <Route path="Tenements" element={<TenementList />} />
      </Route>
    </Routes>
  </div>
);

export default App;

import { Routes, Route } from "react-router-dom";
import CollectionList from "../pages/collection/CollectionList";
import CollectionAdd from "../pages/collection/CollectionAdd";
import CollectionEdit from "../pages/collection/CollectionEdit";
import UserAdd from "../pages/user/UserAdd";
import UserEdit from "../pages/user/UserEdit";
import UserList from "../pages/user/UserList";
import Layout from "../components/Layout";
import CalenderList from "../pages/calender/CalenderList";

export const App = () => (
  <div className="w-full h-full ">
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="Collection/List" element={<CollectionList />} />
        <Route path="Collection/:id" element={<CollectionEdit />} />
        <Route path="Collection/Add" element={<CollectionAdd />} />
        <Route path="User/List" element={<UserList />} />
        <Route path="User/:id" element={<UserEdit />} />
        <Route path="User/Add" element={<UserAdd />} />
        <Route path="Calenderlist" element={<CalenderList />} />
      </Route>
    </Routes>
  </div>
);

export default App;

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
import Market from "../pages/tenement/Market";
import Sell from "../pages/tenement/Sell";
import Rent from "../pages/tenement/Rent";
import Develop from "../pages/tenement/Develop";
import Login from "../pages/Login";
import CalenderList_collection from "../pages/calender/CalenderList_collection";
import { useAuth } from "../providers/Authprovider";

const App = () => {
  const { isLogin, isAdmin } = useAuth();

  return (
    <div className="w-full h-full">
      <Routes>
        <Route path="/login" element={<Login />} />
        {isLogin && (
          <Route path="/" element={<Layout />}>
            <Route path="collections" element={<CollectionList />} />
            <Route path="Collection/:id" element={<CollectionEdit />} />
            <Route path="Collection/Add" element={<CollectionAdd />} />
            {isAdmin && (
              <>
                <Route path="users" element={<UserList />} />
                <Route path="User/:user_id" element={<UserEdit />} />
                <Route path="user" element={<UserAdd />} />
              </>
            )}
            <Route path="Calenderlist" element={<CalenderList />} />
            <Route
              path="Calenderlist_collection"
              element={<CalenderList_collection />}
            />
            <Route path="Tenement/Add" element={<TenementAdd />} />
            <Route path="Tenement/:id" element={<TenementEdit />} />
            <Route path="Tenements" element={<TenementList />} />
            <Route path="Tenement/:id/market" element={<Market />} />
            <Route path="Tenement/:id/sell" element={<Sell />} />
            <Route path="Tenement/:id/rent" element={<Rent />} />
            <Route path="Tenement/:id/develop" element={<Develop />} />
          </Route>
        )}
      </Routes>
    </div>
  );
};

export default App;

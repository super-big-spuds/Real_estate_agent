import { Routes,Route } from "react-router-dom";
import CollectionList from "./pages/collection/CollectionList";
import CollectionAdd from "./pages/collection/CollectionAdd";
import CollectionEdit from "./pages/collection/CollectionEdit";
export const App = () => (
  <Routes>
    <Route path="/" element={<CollectionList />} />
    <Route path="/Collection/List" element={<CollectionList />} />
    <Route path="/Collection/Add" element={<CollectionAdd />} />
    <Route path="/Collection/Edit/:id" element={<CollectionEdit/>}></Route>
    {/* <Route path="*" element={<NotFound />} /> */}
  </Routes>
);
export default App;

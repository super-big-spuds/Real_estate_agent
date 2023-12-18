import { Routes,Route } from "react-router-dom";
import Collection from "./pages/Collection";
export const App = () => (
  <Routes>
    <Route path="/" element={<Collection />} />
    <Route path="/collection" element={<Collection />} />
    {/* <Route path="*" element={<NotFound />} /> */}
  </Routes>
);
export default App;

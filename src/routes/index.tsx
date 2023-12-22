
import { Routes, Route } from 'react-router-dom';
import CollectionList from '../pages/collection/CollectionList';
import CollectionAdd from '../pages/collection/CollectionAdd';
import CollectionEdit from '../pages/collection/CollectionEdit';
import Layout from '../components/Layout';

export const App = () => (
  <div className='w-full h-full '>

  <Routes>
      <Route path="/" element={<Layout/>}>
      <Route path="Collection/List" element={<CollectionList />} />
      <Route path="Collection/Edit/:id" element={<CollectionEdit />} />
      <Route path="Collection/Add" element={<CollectionAdd />} />
      </Route>
  </Routes>
  </div>
);

export default App;

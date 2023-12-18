// Collection page 
import Table from '../components/Table';
import Menu from '../components/Menu';
import { Button } from 'antd';

export const Collection = () => {
  return (
    <div className=' w-full h-screen bg-gray-300 flex  '>
      <Menu />
      <div className=' m-10 flex flex-col items-center w-4/5'>
        <div className=' inline-flex justify-evenly mb-3'>
          <p className=' text-2xl'>代收付管理列表</p>
          <Button type='primary'>篩選</Button>
          <Button type='primary' >新增</Button>
        </div>
        <Table />
      </div>
    </div>
  );
};
export default Collection;


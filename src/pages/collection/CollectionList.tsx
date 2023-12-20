// Collection page 
import Table from '../../components/Table';
import Menu from '../../components/Menu';
import { Button } from 'antd';

export const CollectionList = () => {
  return (
      <div className='flex h-screen bg-gray-300 '>
        <Menu />
        <div className='flex flex-col items-center w-4/5 m-10 '>
          <div className='inline-flex mb-3 justify-evenly'>
            <p className='text-2xl '>代收付管理列表</p>
            <Button type='primary'>篩選</Button>
            <Button type='primary' >新增</Button>
          </div>
          <Table />
        </div>

      </div>
 
  );
};
export default CollectionList;


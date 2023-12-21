import React from 'react';
import { Link } from 'react-router-dom'; // React Router中的Link
import type { ColumnsType } from 'antd/es/table';
import type { TableRowSelection } from 'antd/es/table/interface';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { Input, Button, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
type InputRef = React.RefObject<Input | null>;
type FilterConfirmProps = { closeDropdown: boolean };


type DataIndex = keyof DataType | number;
interface DataType {
  key: React.Key;
  name: string;
  houseid: string;
  type: string;
  amount: string;
  id: string;
}

const useCollist = () => {

  const [data, setData] = useState<DataType[]>([
    {
      key: '1',
      name: '代收1',
      type: '代收',
      houseid: '1',
      amount: '1000',
      id: '1',
    },
    {
      key: '2',
      name: '代付1',
      houseid: '2',
      type: '代付',
      amount: '2000',
      id: '2',
    },
    {
      key: '3',
      name: '代收2',
      houseid: '3',
      type: '代收',
      amount: '3000',
      id: '3',
    },
    {
      key: '4',
      name: '代付2',
      houseid: '4',
      type: '代付',
      amount: '4000',
      id: '4',
    },
  ]);

  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef<InputRef>(null);

  const handleSearch = (
    selectedKeys: string[],
    confirm: (param?: FilterConfirmProps) => void,
    dataIndex: DataIndex,
  ) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText('');
  };

  const getColumnSearchProps = (dataIndex: DataIndex): ColumnsType<DataType> => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }: {
      setSelectedKeys: (keys: string[]) => void;
      selectedKeys: string[];
      confirm: () => void;
      clearFilters: () => void;
      close: () => void;
    }) => (
      <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            搜尋
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            重設
          </Button>
          {/* <Button
          type="link"
          size="small"
          onClick={() => {
            confirm({ closeDropdown: false });
            setSearchText((selectedKeys as string[])[0]);
            setSearchedColumn(dataIndex);
          }}
        >
          Filter
        </Button> */}
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            關閉
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? '#1677ff' : undefined }} />
    ),
    onFilter: (value: any, record: any) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes((value as string).toLowerCase()),
    onFilterDropdownOpenChange: (visible: any) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text: any) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });
  const columns: ColumnsType<DataType> = [
    {
      title: '編號',
      dataIndex: 'id',
    },
    {
      title: '房屋編號',
      dataIndex: 'houseid',
      key: 'houseid',
      width: '30%',
      ...getColumnSearchProps('houseid'),
    },
    {
      title: '費用名稱',
      dataIndex: 'name',
      render: (text, record) => <Link to={`/Collection/edit/${record.id}`}>{text}</Link>,
    },
    {
      title: '費用類型',
      dataIndex: 'type',
      filters: [
        {
          text: '代收',
          value: '代收',
        },
        {
          text: '代付',
          value: '代付',
        },
      ],
      onFilter: (value, record) => record.type.includes(value as string),
    },
    {
      title: '費用金額',
      dataIndex: 'amount',
      sorter: (a, b) => parseInt(a.amount) - parseInt(b.amount),

    }
  ];

  const getListdata = async () => {
    const response = await fetch('http://localhost:5173/api/colelist');
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    setData(data.data);
  }
  useEffect(() => {
    getListdata();
  }, []);
  const navigate = useNavigate();
  const onRow = (record: any) => {
    return {
      onClick: () => {
        navigate(`/Collection/Edit/${record.id}`)
      },
    };
  };
  return {
    data,
    columns,
    onRow
  };
}

export default useCollist;
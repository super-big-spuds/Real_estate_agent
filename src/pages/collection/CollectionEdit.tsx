import Menu from '../../components/Menu';
import Col_mange from '../../components/Col_mange';
import useColedit from '../../hooks/useColedit';


export const Collection = () => {
  const {
    formData,
    notices,
    handleChange,
    handleNoticeChange,
    handleSave,
    handleReset,
    onChangeDate,
    onChangeRemindDate,
    handleAddNotice,
    handleDeleteNotice
  } = useColedit();
  return (
    <div className='flex w-full bg-gray-300 '>
      <Menu />
      <Col_mange
        formData={formData}
        notices={notices}
        handleChange={handleChange}
        handleNoticeChange={handleNoticeChange}
        handleSave={handleSave}
        handleReset={handleReset}
        onChangeDate={onChangeDate}
        onChangeRemindDate={onChangeRemindDate}
        handleAddNotice={handleAddNotice}
        handleDeleteNotice={handleDeleteNotice}
      />
    </div>
  );
};
export default Collection;

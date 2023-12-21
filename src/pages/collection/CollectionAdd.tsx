import Menu from '../../components/Menu';
import Col_mange from '../../components/Col_mange';
import useColadd from '../../hooks/useColadd';



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
  } = useColadd();
  return (
    <div className='flex w-full h-full bg-gray-300 '>
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

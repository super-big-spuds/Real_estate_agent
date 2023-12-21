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

  );
};
export default Collection;


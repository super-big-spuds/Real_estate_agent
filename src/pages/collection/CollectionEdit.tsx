import CollectionMange from '../../components/CollectionMange';
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

      <CollectionMange
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


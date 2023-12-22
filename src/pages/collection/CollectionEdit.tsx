import CollectionMange from "../../components/CollectionMange";
import useCollectionEdit from "../../hooks/useCollectionedit";
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
    handleDeleteNotice,
  } = useCollectionEdit();
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

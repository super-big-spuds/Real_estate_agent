import CollectionMange from "../../components/CollectionMange";
import useCollectionAdd from "../../hooks/useCollectionAdd";

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
  } = useCollectionAdd();
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

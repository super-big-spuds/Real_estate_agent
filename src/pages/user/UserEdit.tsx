import UserMange from "../../components/UserMange";
import useUserEdit from "../../hooks/useUserEdit";
export const Collection = () => {
  const {
    formData,
    handleChange,
    handleSave,
    handleReset,
    isLoading,
    isError,
  } = useUserEdit();
  return (
    <UserMange
      formData={formData}
      handleChange={handleChange}
      handleSave={handleSave}
      handleReset={handleReset}
      isLoading={isLoading}
      isError={isError}
    />
  );
};
export default Collection;

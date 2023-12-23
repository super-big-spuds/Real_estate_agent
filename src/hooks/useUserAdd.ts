import { useState } from "react";
import { usePostUserAdd } from "./useAPI";
import type { User } from "../type";

const useCollectionAdd = () => {
  const { isLoading, isError, handleSaveUser } = usePostUserAdd();

  const [formData, setFormData] = useState<User>({
    name: "王營明",
    email: "User4@gmail.com",
    isactive: "是",
  });

  const handleChange = (key: keyof User, value: string) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [key]: value,
    }));
  };

  const handleSave = async () => {
    await handleSaveUser(formData);
    alert("儲存成功");
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      isactive: "是",
    });
  };

  return {
    formData,
    handleChange,
    handleSave,
    handleReset,
    isLoading,
    isError,
  };
};

export default useCollectionAdd;

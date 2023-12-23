import { useState, useEffect } from "react";
import { useGetUserEdit, usePostUserEdit } from "./useAPI";
import type { User } from "../type";

const useCollectionEdit = () => {
  const { isLoading, isError, handleSaveUser } = usePostUserEdit();
  const { getUserEdit, dataEdit } = useGetUserEdit();

  const [formData, setFormData] = useState<User>({
    name: "",
    email: "",
    isactive: "是",
    password: "",
  });
  const handleChange = (key: keyof User, value: string) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [key]: value,
    }));
  };

  const handleSave = async () => {
    const url = window.location.href;
    const url_split = url.split("/");
    const url_last = url_split[url_split.length - 1];
    const newformdata = {
      ...formData,
      id: url_last,
    };
    await handleSaveUser(newformdata);

    alert("儲存成功");
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      isactive: "是",
      password: "",
    });
  };

  const getapi = async () => {
    const url = window.location.href;
    const url_split = url.split("/");
    const url_last = url_split[url_split.length - 1];
    await getUserEdit(url_last);
  };

  useEffect(() => {
    getapi();
  }, []);
  useEffect(() => {
    if (!dataEdit) return;
    setFormData({
      name: dataEdit.name,
      email: dataEdit.email,
      isactive: dataEdit.isactive,
      password: dataEdit.password,
    });
  }, [dataEdit]);

  return {
    formData,
    handleChange,
    handleSave,
    handleReset,
    isLoading,
    isError,
  };
};

export default useCollectionEdit;

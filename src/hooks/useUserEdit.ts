import { useState, useEffect } from "react";
import { useGetUserEdit, usePostUserEdit } from "./useAPI";
import type { User } from "../type";
import { z } from "zod";
import { useParams } from "react-router-dom";

const useCollectionEdit = () => {
  const { isLoading, isError, handleSaveUser } = usePostUserEdit();
  const { getUserEdit, dataEdit } = useGetUserEdit();
  const { id } = useParams();

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
    if (!id) return;
    const newformdata = {
      ...formData,
      id: id,
    };

    const schema = z.object({
      name: z.string().min(2, "請輸入至少兩個以上的名字"),
      email: z.string().email("不符合Email格式"),
      isactive: z.string(),
      password: z.string().min(6, "請輸入至少六個以上的密碼"),
    });

    const parseResult = schema.safeParse(newformdata);

    if (!parseResult.success) {
      const errorMessages = parseResult.error.errors.map((error) => {
        return error.message;
      });

      alert(errorMessages.join("\n"));
      return;
    }

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
    if (!id) return;
    await getUserEdit(id);
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

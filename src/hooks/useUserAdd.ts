import { useState } from "react";
import { usePostUserAdd } from "./useAPI";
import type { User } from "../type";
import { z } from "zod";

const useCollectionAdd = () => {
  const { isLoading, isError, handleSaveUser } = usePostUserAdd();

  const [formData, setFormData] = useState<User>({
    name: "",
    email: "",
    isactive: "是",
    password: "",
    isadmin: "否",
  });

  const handleChange = (key: keyof User, value: string) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [key]: value,
    }));
  };

  const handleSave = async () => {
    console.log(formData);
    const schema = z.object({
      name: z.string().min(2, "請輸入至少兩個以上的名字"),
      email: z.string().email("不符合Email格式"),
      isactive: z.string(),
      password: z.string().min(6, "請輸入至少六個以上的密碼"),
      isadmin: z.string(),
    });

    const parseResult = schema.safeParse(formData);

    if (!parseResult.success) {
      const errorMessages = parseResult.error.errors.map((error) => {
        return error.message;
      });

      alert(errorMessages.join("\n"));
      return;
    }

    await handleSaveUser(parseResult.data);
    alert("儲存成功");
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      isactive: "是",
      password: "",
      isadmin: "否",
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

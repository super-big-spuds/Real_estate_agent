import { useEffect, useState } from "react";
import {
  useGetNotice,
  usePostAddNotice,
  usePutNotice,
  useDeleteNotice,
} from "../useAPI";
import dayjs from "dayjs";

type ITenementType = "develop" | "rent" | "sell" | "market";

type INotice = {
  id: number;
  visitDate: string;
  record: string;
  remindDate: string;
  remind: string;
};

export default function useTenementNotice(
  tenementType: ITenementType,
  tenementId: string
) {
  const [notices, setNotices] = useState<INotice[]>([
    {
      id: 1,
      visitDate: "2024-01-01",
      record: "紀錄事項1",
      remindDate: "2024-01-01",
      remind: "提醒事項1",
    },
  ]);

  const { isLoading, isError, getNotice, dataNotice } = useGetNotice();
  const { handlePostAddNotice, newNotices } = usePostAddNotice();
  const { handlePutNotice } = usePutNotice();
  const handleSaveNoticeData = () => {
    handlePutNotice(tenementType, notices);
  };
  const handleAddNotice = () => {
    const timeformat = "YYYY-MM-DD";
    const today = dayjs().format(timeformat);
    const newNotice = {
      visitDate: today,
      record: "",
      remindDate: today,
      remind: "",
      collection_id: Number(tenementId),
      isNew: true,
    };
    handlePostAddNotice(tenementType, [newNotice]);
  };
  useEffect(() => {
    if (newNotices.length > 0) {
      setNotices((prevNotices) => [...prevNotices, ...newNotices]);
    }
  }, [newNotices]);

  useEffect(() => {
    getNotice(tenementType, tenementId);
  }, []);

  useEffect(() => {
    if (!dataNotice) return;
    setNotices(dataNotice);
  }, [dataNotice]);

  const handleNoticeChange = (index: number, key: string, value: string) => {
    setNotices((prev) =>
      prev.map((notice, i) =>
        i === index ? { ...notice, [key]: value } : notice
      )
    );
  };

  const { handleDeleteNoticeApi } = useDeleteNotice();
  const handleDeleteNotice = (index: number) => {
    handleDeleteNoticeApi(notices[index].id, tenementType);
    setNotices((prev) => prev.filter((_, i) => i !== index));
  };

  return {
    states: {
      notices,
      isLoading,
      isError,
    },
    handlers: {
      handleNoticeChange,
      handleDeleteNotice,
      handleAddNotice,
      handleSaveNoticeData,
    },
  };
}

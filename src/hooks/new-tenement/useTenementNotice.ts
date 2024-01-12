import { useEffect, useState } from "react";

type ITenementType = "develop" | "rent" | "sale" | "market";

type INotice = {
  id: string;
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
      id: "1",
      visitDate: "2024-01-01",
      record: "紀錄事項1",
      remindDate: "2024-01-01",
      remind: "提醒事項1",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    try {
      // handle fetch data here based on tenementId and noticeType
      console.log(tenementType, tenementId);

      setNotices([
        {
          id: "1",
          visitDate: "2024-01-01",
          record: "紀錄事項1",
          remindDate: "2024-01-01",
          remind: "提醒事項1",
        },
        {
          id: "2",
          visitDate: "2024-01-01",
          record: "紀錄事項2",
          remindDate: "2024-01-01",
          remind: "提醒事項2",
        },
      ]);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
    }
  }, [tenementType, tenementId]);

  const handleNoticeChange = (index: number, key: string, value: string) => {
    setNotices((prev) =>
      prev.map((notice, i) =>
        i === index ? { ...notice, [key]: value } : notice
      )
    );
  };
  const handleDeleteNotice = (index: number) => {
    setNotices((prev) => prev.filter((_, i) => i !== index));
  };
  const handleAddNotice = () => {
    setNotices((prev) => [
      ...prev,
      {
        id: "",
        visitDate: "2024-01-01",
        record: "",
        remindDate: "2024-01-01",
        remind: "",
      },
    ]);
  };

  const handleSaveNoticeData = () => {
    // handle save data here
    console.log(notices);
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

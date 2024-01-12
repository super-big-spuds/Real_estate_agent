import { useEffect, useState } from "react";

type ITenementBasedInfoType = {
  tenement_address: string;
  tenement_product_type: string;
  tenement_type: string;
  tenement_face: string;
  tenement_images: string[];
};

type ITenementMarketInfoType = ITenementBasedInfoType & {
  tenement_host_name: string;
  tenement_host_telphone: string;
  tenement_host_phone: string;
  tenement_host_line: string;
  tenement_host_remittance_bank: string;
  tenement_host_remittance_account: string;
  tenement_host_address: string;
  tenement_host_birthday: string;
  tenement_host_hobby: string;
  tenement_host_remark: string;
  tenement_area_max: string;
  tenement_area_min: string;
  burget_rent_max: string;
  burget_rent_min: string;
  hopefloor_max: string;
  hopefloor_min: string;
  market_state: string;
};

export function useTenementMarketInfo(tenementId: string) {
  const [marketInfo, setMarketInfo] = useState<ITenementMarketInfoType>({
    tenement_address: "1234",
    tenement_product_type: "套房",
    tenement_type: "行銷追蹤",
    tenement_face: "海景",
    tenement_host_name: "John",
    tenement_host_telphone: "0987654321",
    tenement_host_phone: "0987654321",
    tenement_host_line: "line_id",
    tenement_host_remittance_bank: "ABC Bank",
    tenement_host_remittance_account: "1234567890",
    tenement_host_address: "台北市大安區",
    tenement_host_birthday: "1950-09-01",
    tenement_host_hobby: "打球",
    tenement_host_remark: "備註",
    tenement_area_max: "10",
    tenement_area_min: "5",
    burget_rent_max: "20000",
    burget_rent_min: "10000",
    hopefloor_max: "5",
    hopefloor_min: "2",
    market_state: "租房",
    tenement_images: [
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    ],
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleChange = (key: keyof ITenementMarketInfoType, value: string) => {
    setMarketInfo((prev) => {
      if (!prev) return prev;
      return { ...prev, [key]: value };
    });
  };

  const handleSave = () => {
    // handle save data here
    console.log(marketInfo);
  };

  useEffect(() => {
    setIsLoading(true);
    try {
      // handle fetch data here based on tenementId
      setMarketInfo({
        tenement_address: "1234",
        tenement_product_type: "套房",
        tenement_type: "行銷追蹤",
        tenement_face: "海景",
        tenement_host_name: "John",
        tenement_host_telphone: "0987654321",
        tenement_host_phone: "0987654321",
        tenement_host_line: "line_id",
        tenement_host_remittance_bank: "ABC Bank",
        tenement_host_remittance_account: "1234567890",
        tenement_host_address: "台北市大安區",
        tenement_host_birthday: "1950-09-01",
        tenement_host_hobby: "打球",
        tenement_host_remark: "備註",
        tenement_area_max: "10",
        tenement_area_min: "5",
        burget_rent_max: "20000",
        burget_rent_min: "10000",
        hopefloor_max: "5",
        hopefloor_min: "2",
        market_state: "租房",
        tenement_images: [
          "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
        ],
      });

      setIsLoading(false);
    } catch (error) {
      setIsError(true);
    }
  }, [tenementId]);

  return {
    states: {
      marketInfo,
      isLoading,
      isError,
    },
    handlers: {
      handleChange,
      handleSave,
    },
  };
}

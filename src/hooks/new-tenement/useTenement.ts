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
    tenement_images: [
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    ],
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

type ITenementRentInfoType = ITenementBasedInfoType & {
  tenement_status: "未成交" | "已成交" | "已成交下架" | "過戶完成下架";
  total_rating: string;
  main_building: string;
  affiliated_building: string;
  public_buliding: string;
  unregistered_area: string;
  management_magnification: string;
  management_fee: string;
  rent: string;
  deposit: string;
  tenement_floor: string;
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

  renter_start_date: string;
  renter_end_date: string;
  renter_name: string;
  renter_id_images: string[];
  renter_phone: string;
  renter_jobtitle: string;
  renter_guarantor_name: string;
  renter_guarantor_phone: string;
  renter_remark: string;
};

export function useTenementRentInfo(tenementId: string) {
  const [rentInfo, setRentInfo] = useState<ITenementRentInfoType>({
    tenement_address: "1234",
    tenement_product_type: "套房",
    tenement_type: "行銷追蹤",
    tenement_face: "海景",
    tenement_images: [
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    ],
    tenement_status: "已成交",
    total_rating: "4",
    main_building: "3",
    affiliated_building: "2",
    public_buliding: "1",
    unregistered_area: "2",
    management_magnification: "1.5",
    management_fee: "3000",
    rent: "20000",
    deposit: "40000",
    tenement_floor: "7",
    tenement_host_name: "John Doe",
    tenement_host_telphone: "1234567890",
    tenement_host_phone: "0987654321",
    tenement_host_line: "john_doe",
    tenement_host_remittance_bank: "Bank of America",
    tenement_host_remittance_account: "9876543210",
    tenement_host_address: "123 Main St, City, Country",
    tenement_host_birthday: "1980-01-01",
    tenement_host_hobby: "Reading",
    tenement_host_remark: "No remarks",
    renter_start_date: "2022-01-01",
    renter_end_date: "2023-01-01",
    renter_name: "Jane Doe",
    renter_id_images: ["image1.jpg", "image2.jpg"],
    renter_phone: "0987654321",
    renter_jobtitle: "Software Engineer",
    renter_guarantor_name: "John Smith",
    renter_guarantor_phone: "1234567890",
    renter_remark: "No remarks",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleChange = (key: keyof ITenementRentInfoType, value: string) => {
    setRentInfo((prev) => {
      if (!prev) return prev;
      return { ...prev, [key]: value };
    });
  };

  const handleSave = () => {
    // handle save data here
    console.log(rentInfo);
  };

  useEffect(() => {
    setIsLoading(true);
    try {
      // handle fetch data here based on tenementId
      setRentInfo({
        tenement_address: "1234",
        tenement_product_type: "套房",
        tenement_type: "行銷追蹤",
        tenement_face: "海景",
        tenement_images: [
          "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
        ],
        tenement_status: "已成交",
        total_rating: "4",
        main_building: "3",
        affiliated_building: "2",
        public_buliding: "1",
        unregistered_area: "2",
        management_magnification: "1.5",
        management_fee: "3000",
        rent: "20000",
        deposit: "40000",
        tenement_floor: "7",
        tenement_host_name: "John Doe",
        tenement_host_telphone: "1234567890",
        tenement_host_phone: "0987654321",
        tenement_host_line: "john_doe",
        tenement_host_remittance_bank: "Bank of America",
        tenement_host_remittance_account: "9876543210",
        tenement_host_address: "123 Main St, City, Country",
        tenement_host_birthday: "1980-01-01",
        tenement_host_hobby: "Reading",
        tenement_host_remark: "No remarks",
        renter_start_date: "2022-01-01",
        renter_end_date: "2023-01-01",
        renter_name: "Jane Doe",
        renter_id_images: ["image1.jpg", "image2.jpg"],
        renter_phone: "0987654321",
        renter_jobtitle: "Software Engineer",
        renter_guarantor_name: "John Smith",
        renter_guarantor_phone: "1234567890",
        renter_remark: "No remarks",
      });

      setIsLoading(false);
    } catch (error) {
      setIsError(true);
    }
  }, [tenementId]);

  return {
    states: {
      rentInfo,
      isLoading,
      isError,
    },
    handlers: {
      handleChange,
      handleSave,
    },
  };
}
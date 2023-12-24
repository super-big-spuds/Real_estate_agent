import CalenderTable from "../../components/CalenderTable";
import { usePostCalender } from "../../hooks/useAPI";

export const CalenderList = () => {
  const { isLoading, isError, handleGetCalender, dataCalender } =
    usePostCalender();
  return (
    <div className="flex flex-col items-center w-4/5 m-10 ">
      <div className="inline-flex items-center mb-10 justify-evenly w-96">
        <div className="inline-flex items-center mb-10 justify-evenly w-96">
          <p className="text-4xl ">提醒月曆列表</p>
        </div>
      </div>
      <CalenderTable
        isLoading={isLoading}
        isError={isError}
        handleGetCalender={handleGetCalender}
        dataCalender={dataCalender}
      />
    </div>
  );
};
export default CalenderList;

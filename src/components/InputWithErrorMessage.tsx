import { Input } from "antd";

type Props = {
  name?: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  isError: boolean;
  errorMessage: string;
};

export default function InputWithErrorMessage({
  name,
  value,
  onChange,
  isError,
  errorMessage,
}: Props) {
  return (
    <div className="col-span-3">
      <div className="relative my-4">
        <Input
          placeholder="請輸入內容"
          name={name}
          value={value}
          onChange={onChange}
        />
        <span className="absolute left-0 text-red-500 top-full">
          {isError ? errorMessage : ""}
        </span>
      </div>
    </div>
  );
}

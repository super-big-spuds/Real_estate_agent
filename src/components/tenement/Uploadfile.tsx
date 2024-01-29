import React from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Upload } from "antd";
import type { UploadFile } from "antd/es/upload/interface";
import { deleteFile } from "../../hooks/useAPI";

type UploadFileProps = {
  fileList: string[];
  setFileList: (fileList: string[]) => void;
};

const App = (props: UploadFileProps) => {
  const url = `${import.meta.env.VITE_API_BASE_URL}/api/files/upload`;

  const organizedFileList: UploadFile[] = props.fileList.map((url) => {
    return {
      uid: url,
      name: url,
      status: "done",
      url: url,
    };
  });

  return (
    <>
      <Upload
        action={url}
        headers={{
          Authorization: "Bearer " + localStorage.getItem("token"),
        }}
        listType="picture"
        fileList={organizedFileList}
        onChange={(info) => {
          const { status } = info.file;
          if (status !== "uploading") {
            const fileList = [...props.fileList, info.file.response.url];
            props.setFileList(fileList);
          }
          if (status === "done") {
            console.log(`${info.file.name} file uploaded successfully.`);
          } else if (status === "error") {
            console.log(`${info.file.name} file upload failed.`);
          }
        }}
        onRemove={async (file) => {
          await deleteFile(file.url as string);

          const fileList = props.fileList.filter((url) => url !== file.url);
          props.setFileList(fileList);
        }}
        className="upload-list-inline"
      >
        <Button
          type="primary"
          className="bg-blue-600 "
          icon={<UploadOutlined />}
        >
          新增照片
        </Button>
      </Upload>
    </>
  );
};

export default App;

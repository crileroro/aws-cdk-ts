import React from "react";
import File from "./File";

const FileList = ({ result }) => {
  console.log(result);
  if (result.loading) {
    return <div>loading...</div>;
  } else {
    return (
      <div>
        {result.files.map((file, i) => (
          <File key={i} {...file} />
        ))}
      </div>
    );
  }
};
export default FileList;
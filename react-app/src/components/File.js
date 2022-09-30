import React from "react";

const File = ({ id, file, description, content }) => {
  return (
    <div id={id}>
      <h1>Name of the file {file}</h1>
      <p>description {description}</p>
      <p>Content {content}</p>
    </div>
  );
};

export default File;
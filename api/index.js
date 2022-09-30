exports.lambdaHandler = async (event) => {
  const responseCode = 200;
  const responseBody = [
    { id: 1, file: "file1.pdf", description: "File pdf 1", content: "This is the content for file1.pdf" },
    { id: 2, file: "file2.pdf", description: "File pdf 2", content: "This is the content for file2.pdf" },
    { id: 3, file: "file3.pdf", description: "File pdf 3", content: "This is the content for file3.pdf" },
  ];
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true,
  };
  const response = {
    statusCode: responseCode,
    headers: headers,
    body: JSON.stringify(responseBody),
  };
  return response;
};
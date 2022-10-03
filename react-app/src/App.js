import React, { useEffect, useState } from "react";
import FileList from "./components/FileList";
import axios from "axios";

const App = () => {
  const [err, setErr] = useState(false);
  const [result, setResult] = useState({ loading: true, files: null });
  useEffect(() => {
    const getData = async () => {
      const url = "https://mgpkl3ulfa.execute-api.eu-west-1.amazonaws.com/prod/";
      try {
        let result = await axios.get(url);
        setResult({ loading: false, files: result.data });
      } catch (error) {
        setErr(error);
      }
    };
    getData();
  }, []);
  if (err) {
    return <div>Error {err}</div>;
  } else {
    return (
      <div>
        <FileList result={result} />
      </div>
    );
  }
};

export default App;

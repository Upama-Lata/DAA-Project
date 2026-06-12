import { useState } from "react";

function FileUpload({ setResult }) {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch(
      "http://127.0.0.1:5000/upload",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();
    setResult(data);
  };

  return (
    <div className="upload-box">
      <input
        type="file"
        accept=".txt"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <button onClick={handleUpload}>
        Generate Network
      </button>
    </div>
  );
}

export default FileUpload;
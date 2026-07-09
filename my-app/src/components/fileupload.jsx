import { useState } from "react";

function FileUpload({ setResult }) {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");

  const handleUpload = async () => {

    if (!file) {
      setError("Please select a .txt file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {

      const response = await fetch("https://daa-project-65im.onrender.com/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error);
        setResult({
          mst: [],
          totalCost: 0,
        });
        return;
      }

      setError("");
      setResult(data);

    } catch (err) {
      setError("Cannot connect to the backend server.");
    }
  };

  return (
    <div className="upload-box">

      <h2>Upload Network File</h2>

      <input
        type="file"
        accept=".txt"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <br /><br />

      <button onClick={handleUpload}>
        Generate Network
      </button>

      {error && (
        <p className="error-message">
          {error}
        </p>
      )}

    </div>
  );
}

export default FileUpload;
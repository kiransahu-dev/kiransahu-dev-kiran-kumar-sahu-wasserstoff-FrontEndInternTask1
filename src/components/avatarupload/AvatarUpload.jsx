import React, { useRef, useState } from 'react';
import styles from "./AvatarUpload.module.css";

const AvatarUpload = ({ onUpload }) => {
  const [preview, setPreview] = useState(null);
  const inputRef = useRef();

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    handleFile(file);
  };

  const handleFile = (file) => {
    if (!file.type.startsWith("image/")) return;
    if (file.size > 500000) return alert("Max file size is 500KB");
    const reader = new FileReader();
    reader.onload = () => {
      setPreview(reader.result);
      onUpload(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleClick = () => inputRef.current.click();
  return (
    <div
      className={styles.uploadBox}
      onClick={handleClick}
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      {preview ? (
        <img src={preview} alt="Preview" className={styles.preview} />
      ) : (
        <>
          <span className={styles.icon}>📤</span>
          <p>Drag and drop or click to upload</p>
        </>
      )}
      <input
        type="file"
        ref={inputRef}
        accept="image/png, image/jpeg"
        style={{ display: "none" }}
        onChange={(e) => handleFile(e.target.files[0])}
      />
    </div>
  );
};

export default AvatarUpload;

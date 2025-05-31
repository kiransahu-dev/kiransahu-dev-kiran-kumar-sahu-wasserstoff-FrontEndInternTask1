import React from "react";
import styles from "./InputField.module.css";

const InputField = ({ label, type = "text", value, onChange, placeholder }) => {
  return (
    <div className={styles.inputWrapper}>
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default InputField;

import React, { useState } from "react";
import AvatarUpload from "../components/avatarupload/AvatarUpload";
import InputField from "../components/InputField/InputField";
import Button from "../components/button/Button";
import LogoHeader from "../components/logoheader/LogoHeader";
import { useNavigate } from "react-router-dom";

const FormPage = () => {
  const [avatar, setAvatar] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!name || !email || !username || !avatar)
      return alert("Fill all fields");
    localStorage.setItem(
      "ticketData",
      JSON.stringify({ name, email, username, avatar })
    );
    navigate("/ticket");
  };

  return (
    <div className="page">
      <LogoHeader />
      <h1>Your Journey to Coding Conf 2025 Starts Here!</h1>
      <p>Secure your spot at next year’s biggest coding conference.</p>
      <AvatarUpload onUpload={setAvatar} />
      <small>Upload your photo (JPG or PNG, max size: 500KB)</small>
      <InputField label="Full Name" value={name} onChange={setName} />
      <InputField
        label="Email Address"
        type="email"
        value={email}
        onChange={setEmail}
        placeholder="example@email.com"
      />
      <InputField
        label="GitHub Username"
        value={username}
        onChange={setUsername}
        placeholder="@yourusername"
      />
      <Button onClick={handleSubmit}>Generate My Ticket</Button>
    </div>
  );
};

export default FormPage;

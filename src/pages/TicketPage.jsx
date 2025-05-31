import React from "react";
import { useNavigate } from "react-router-dom";
import TicketCard from "../components/ticketcard/TicketCard";
import LogoHeader from "../components/logoheader/LogoHeader";

const TicketPage = () => {
  const navigate = useNavigate();
  const data = JSON.parse(localStorage.getItem("ticketData"));

  if (!data) return navigate("/");
  return (
    <div className="ticketPage">
      <LogoHeader />
      <h1>
        Congrats, <span className="highlight">{data.name}</span>!<br />
        Your ticket is ready.
      </h1>
      <p>
        We've emailed your ticket to{" "}
        <span className="highlight">{data.email}</span> and will send updates.
      </p>
      <TicketCard
        name={data.name}
        username={data.username}
        avatar={data.avatar}
      />
    </div>
  );
};

export default TicketPage;

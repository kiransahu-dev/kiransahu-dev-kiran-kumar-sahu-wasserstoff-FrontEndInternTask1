import React from "react";
import styles from "./TicketCard.module.css";

const TicketCard = ({ name, username, avatar }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>🚀 Coding Conf</div>
      <div className={styles.meta}>Jan 31, 2025 / Austin, TX</div>
      <div className={styles.userInfo}>
        <img src={avatar} className={styles.avatar} alt="avatar" />
        <div>
          <div className={styles.name}>{name}</div>
          <div className={styles.username}>@{username}</div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;

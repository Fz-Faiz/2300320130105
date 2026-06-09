function NotificationCard({ notification }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "12px",
        margin: "10px 0",
        borderRadius: "5px",
      }}
    >
      <h3>{notification.Type}</h3>

      <p>{notification.Message}</p>

      <small>{notification.Timestamp}</small>
    </div>
  );
}

export default NotificationCard;
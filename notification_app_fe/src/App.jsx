import { useEffect, useState } from "react";
import { getNotifications } from "./notificationService";
import { getTopNotifications } from "./utils/priority";
import  {Log} from "../../logging_middleware/logger"
function App() {
  const [notifications, setNotifications] =
    useState([]);

  useEffect(() => {
    async function load() {
      const data =
        await getNotifications();

      const top10 =
        getTopNotifications(
          data.notifications
        );

      setNotifications(top10);
    }

    load();
  }, []);

  Log(
      "frontend",
      "info",
      "page",
      "Notifications page loaded"
    );

  return (
    <div>
      <h1>Top 10 Notifications</h1>

      {notifications.map((n) => (
        <div key={n.ID}>
          <h3>{n.Type}</h3>
          <p>{n.Message}</p>
          <small>{n.Timestamp}</small>
        </div>
      ))}
    </div>
  );
}

export default App;
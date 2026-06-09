import { useEffect, useState } from "react";
import NotificationCard from "../components/NotificationCard";
import { getNotifications } from "../notificationService";
import { getTopNotifications } from "../utils/priority";

function PriorityNotifications() {
  const [count, setCount] = useState(10);
  const [notifications, setNotifications] =
    useState([]);

  useEffect(() => {
    loadNotifications();
  }, [count]);

  async function loadNotifications() {
    const data = await getNotifications();

    const topNotifications =
      getTopNotifications(
        data.notifications || [],
        count
      );

    setNotifications(topNotifications);
  }

  return (
    <div>
      <h1>Priority Notifications</h1>

      <select
        value={count}
        onChange={(e) =>
          setCount(Number(e.target.value))
        }
      >
        <option value={10}>
          Top 10
        </option>

        <option value={15}>
          Top 15
        </option>

        <option value={20}>
          Top 20
        </option>
      </select>

      {notifications.map(
        (notification) => (
          <NotificationCard
            key={notification.ID}
            notification={notification}
          />
        )
      )}
    </div>
  );
}

export default PriorityNotifications;
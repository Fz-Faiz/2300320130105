import { useEffect, useState } from "react";
import NotificationCard from "../components/NotificationCard";
import { getNotifications } from "../notificationService";

function AllNotifications() {
  const [notifications, setNotifications] = useState([]);
  const [filter, setFilter] = useState("All");
useEffect(() => {
    loadNotifications();
  }, []);
 

  async function loadNotifications() {
    const data = await getNotifications();
    console.log(data)
    setNotifications(data.notifications || []);
  }

   

  const filteredNotifications =
    filter === "All"
      ? notifications
      : notifications.filter(
          (notification) =>
            notification.Type === filter
        );

  return (
    <div>
      <h1>All Notifications</h1>

      <select
        value={filter}
        onChange={(e) =>
          setFilter(e.target.value)
        }
      >
        <option value="All">All</option>
        <option value="Placement">
          Placement
        </option>
        <option value="Result">
          Result
        </option>
        <option value="Event">
          Event
        </option>
      </select>

      {filteredNotifications.map(
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

export default AllNotifications;
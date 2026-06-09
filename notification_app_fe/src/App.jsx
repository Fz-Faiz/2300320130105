import {
  Routes,
  Route,
  Link,
} from "react-router-dom";

import AllNotifications from "./pages/AllNotifications";
import PriorityNotifications from "./pages/PriorityNotifications";

function App() {
  return (
    <div>
      <nav
        style={{
          padding: "20px",
          display: "flex",
          gap: "20px",
        }}
      >
        <Link to="/">
          All Notifications
        </Link>

        <Link to="/priority">
          Priority Notifications
        </Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={<AllNotifications />}
        />

        <Route
          path="/priority"
          element={
            <PriorityNotifications />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
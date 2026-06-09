export function getTopNotifications(notifications, count = 10) {
  const weights = {
    Placement: 3,
    Result: 2,
    Event: 1,
  };

  return notifications
    .sort((a, b) => {
      if (weights[a.Type] !== weights[b.Type]) {
        return weights[b.Type] - weights[a.Type];
      }

      return (
        new Date(b.Timestamp).getTime() -
        new Date(a.Timestamp).getTime()
      );
    })
    .slice(0, count);
}
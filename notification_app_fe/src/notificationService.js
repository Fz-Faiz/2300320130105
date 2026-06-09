const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJmYWl6LjIzYjAxMzEyNzJAYWJlcy5hYy5pbiIsImV4cCI6MTc4MDk5MDM0MiwiaWF0IjoxNzgwOTg5NDQyLCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiMTQ4Njc3MTMtM2Y4NC00YjFjLThhY2QtNzk1YmU4ZmFmNTZmIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoiZmFpeiBhaG1hZCIsInN1YiI6IjY5MGQyYTI5LTJiOTItNDAwNC1iMDI2LTQ3NjUyNjhjZjMyMyJ9LCJlbWFpbCI6ImZhaXouMjNiMDEzMTI3MkBhYmVzLmFjLmluIiwibmFtZSI6ImZhaXogYWhtYWQiLCJyb2xsTm8iOiIyMzAwMzIwMTMwMTA1IiwiYWNjZXNzQ29kZSI6ImNYdXFodCIsImNsaWVudElEIjoiNjkwZDJhMjktMmI5Mi00MDA0LWIwMjYtNDc2NTI2OGNmMzIzIiwiY2xpZW50U2VjcmV0IjoiUHRZVWN2cE1GTW5mWHdhdSJ9.gyfwa-31NpdJgKXsfQx_6KOVGKbhYLishZl_dRUxBu0";

export async function getNotifications() {
  const response = await fetch(
    "http://4.224.186.213/evaluation-service/notifications",
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    }
  );
  
  return response.json();
}
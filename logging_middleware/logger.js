const LOG_URL =
  "http://4.224.186.213/evaluation-service/logs";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJmYWl6LjIzYjAxMzEyNzJAYWJlcy5hYy5pbiIsImV4cCI6MTc4MDk4ODA0MCwiaWF0IjoxNzgwOTg3MTQwLCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiNjVmZDkyM2UtMGQ5Mi00NzM3LWE1Y2EtNWJhY2EyNzIyNzlkIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoiZmFpeiBhaG1hZCIsInN1YiI6IjY5MGQyYTI5LTJiOTItNDAwNC1iMDI2LTQ3NjUyNjhjZjMyMyJ9LCJlbWFpbCI6ImZhaXouMjNiMDEzMTI3MkBhYmVzLmFjLmluIiwibmFtZSI6ImZhaXogYWhtYWQiLCJyb2xsTm8iOiIyMzAwMzIwMTMwMTA1IiwiYWNjZXNzQ29kZSI6ImNYdXFodCIsImNsaWVudElEIjoiNjkwZDJhMjktMmI5Mi00MDA0LWIwMjYtNDc2NTI2OGNmMzIzIiwiY2xpZW50U2VjcmV0IjoiUHRZVWN2cE1GTW5mWHdhdSJ9.uOmj8vG3JWm5qGnLChqlEZ3YxxdaMHYlBiXRMzJMh9Q";

export async function Log(
  stack,
  level,
  packageName,
  message
) {
  try {
    const response = await fetch(LOG_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        stack,
        level,
        package: packageName,
        message,
      }),
    });

    console.log("Log Status:", response.status);
    console.log(await response.text());
  } catch (error) {
    console.error(error);
  }
}
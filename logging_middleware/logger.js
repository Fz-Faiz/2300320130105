const LOG_URL =
  "http://4.224.186.213/evaluation-service/logs";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJmYWl6LjIzYjAxMzEyNzJAYWJlcy5hYy5pbiIsImV4cCI6MTc4MDk4NjI4NCwiaWF0IjoxNzgwOTg1Mzg0LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiMDVjOWNkMzctYzg5Mi00NmI2LTk0YmQtNmQ0MmZiMDhiODllIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoiZmFpeiBhaG1hZCIsInN1YiI6IjY5MGQyYTI5LTJiOTItNDAwNC1iMDI2LTQ3NjUyNjhjZjMyMyJ9LCJlbWFpbCI6ImZhaXouMjNiMDEzMTI3MkBhYmVzLmFjLmluIiwibmFtZSI6ImZhaXogYWhtYWQiLCJyb2xsTm8iOiIyMzAwMzIwMTMwMTA1IiwiYWNjZXNzQ29kZSI6ImNYdXFodCIsImNsaWVudElEIjoiNjkwZDJhMjktMmI5Mi00MDA0LWIwMjYtNDc2NTI2OGNmMzIzIiwiY2xpZW50U2VjcmV0IjoiUHRZVWN2cE1GTW5mWHdhdSJ9.Jp6k0TQlTuzHwOmFS3VMPVpU6VutSR5eS1MyIGnBcsM";

async function Log(
  stack,
  level,
  packageName,
  message
) {
  try {
    await fetch(LOG_URL, {
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
  } catch (err) {}
}

module.exports = Log;
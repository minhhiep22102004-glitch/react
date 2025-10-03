import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res => setUsers(res.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h2>👥 Users Page</h2>
      {loading ? <p>Đang tải dữ liệu...</p> : (
        <ul>
          {users.map(u => (
            <li key={u.id}>
              <strong>{u.name}</strong> - {u.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

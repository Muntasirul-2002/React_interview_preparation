import { useMemo, useState } from "react";

const UserList = ({ users }) => {
  const [query, setQuery] = useState("");
  const filteredUsers = useMemo(() => {
    return users.filter((user) =>
      user.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [users, query]); // only re-run when users or query changes
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search users"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <ul>
          {filteredUsers.map((u) => (
            <li key={u.id}>{u.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default UserList;

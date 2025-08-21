import React, { useState } from "react";

const useEffect = ({ userId }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    // fetch user data when userId changes
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        if (!cancelled) {
          setUserData(data);
          setLoading(false);
        }
      });

    //cleanup if component unmounts before fetch completes
    return () => {
      cancelled = true;
    };
  }, [userId]);
  if (loading) return <div>Loading user data...</div>;
  if (!userData) return <div>No user found</div>;
  return (
    <div>
      <h3>{userData.name}</h3>
      <p>Joining date: {userData.joinDate}</p>
    </div>
  );
};

export default useEffect;

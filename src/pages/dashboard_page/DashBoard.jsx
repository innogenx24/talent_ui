import React, { useEffect, useState } from "react";

const DashBoard = () => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  useEffect(() => {
    const handleStorageChange = () => {
      setToken(localStorage.getItem("token"));
    };

    // Listen for storage changes
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      {token ? <p>Token: {token}</p> : <p>No token found</p>}
    </div>
  );
};

export default DashBoard;

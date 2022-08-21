import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import PlaceholderData from "./PlaceholderData";

const Plcaeholder_Api = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchingData = async () => {
    try {
      setLoading(false);
      const responceData = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(await responceData.json());
    } catch (error) {
      setLoading(false)
      console.log("Error" + error);
    }
  };

  useEffect(() => {
    fetchingData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <PlaceholderData users={users} />
    </>
  );
};

export default Plcaeholder_Api;

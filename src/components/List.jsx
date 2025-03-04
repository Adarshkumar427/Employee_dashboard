import React from "react";
import { useState, useEffect } from "react";

import Card from "./Card";

const List = () => {
  const [data, setData] = useState([]);
  const [searchId, setSearchId] = useState("");
  const [filterData, setFilterData] = useState([]);
  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch(`https://dummyjson.com/users`);
      const result = await res.json();
      setData(result.users);
      setFilterData(result.users);
    };
    fetchUser();
  }, []);
  if (data.length === 0)
    return (
      <p style={{ display: "grid", placeItems: "center", minHeight: "100vh" }}>
        <b>Loading...</b>
      </p>
    );
  const handleSearch = () => {
    if (searchId.trim() === "") return;
    const foundData = data.find((e) => e.id.toString() === searchId);
    setFilterData(foundData ? [foundData] : []);
  };
  const handleDelete = (id) => {
    setFilterData(filterData.filter((e) => e.id !== id));
  };
  return (
    <div>
      <div className="head">
        <h1 style={{ letterSpacing: "2px" }}>Users Dashboard</h1>
        <div className="inline">
          <input
            className="input"
            type="text"
            placeholder="Search by id"
            value={searchId}
            onChange={(e) => setSearchId(e.target.value)}
          />
          <button className="search" onClick={handleSearch}>
            search
          </button>
        </div>
      </div>
      <div className="grid">
        {filterData.length === 0 ? (
          <p
            style={{
              textAlign: "center",
              fontWeight: "bold",
              marginTop: "60px",
              color: "red",
            }}
          >
            404 !! No result found
          </p>
        ) : (
          filterData.map((e) => (
            <Card key={e.id} detail={e} onDelete={handleDelete} />
          ))
        )}
      </div>
    </div>
  );
};

export default List;

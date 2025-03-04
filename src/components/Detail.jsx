import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch(`https://dummyjson.com/users/${id}`);
      const result = await res.json();
      setData(result);
    };
    fetchUser();
  }, []);
  if (data.length === 0)
    return (
      <p style={{ display: "grid", placeItems: "center", minHeight: "100vh" }}>
        <b>Loading...</b>
      </p>
    );

  return (
    <div className="card1">
      <div className="card2">
        <div className="image">
          <img src={data.image} alt="img" />
        </div>
        <h3>
          {data.firstName + " "}
          {data.lastName}
        </h3>
        <p>
          <b>Age : </b>
          {data.age}
        </p>
        <p>
          <b>Gender :</b> {data.gender}
        </p>
        <p>
          <b>Blood Group :</b> {data.bloodGroup}
        </p>
        <p>
          <b>Height :</b> {data.height}
        </p>
        <p>
          <b>Weight : </b> {data.weight}
        </p>
        <p>
          <b>Hair color :</b> {data.hair?.color}
        </p>
        <p>
          <b>Address :</b> {data.address?.address}
        </p>
        <p>
          <b>country :</b> {data.address?.country}
        </p>
        <p>
          <b>University :</b>
          {data.university}
        </p>
        <p>
          <b>Department :</b> {data.company?.department}
        </p>
        <p>
          <b>company Name :</b> {data.company?.name}
        </p>
        <p>
          <b>Company Title :</b> {data.company?.title}
        </p>
      </div>
      <div className="btn-container">
        <Link to={"/"} className="btn">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Detail;

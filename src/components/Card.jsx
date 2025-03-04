import React from "react";
import { useNavigate } from "react-router-dom";
const Card = ({ detail, onDelete }) => {
  const navigateTo = useNavigate();
  return (
    <div className="card" onClick={() => navigateTo(`/detail/${detail.id}`)}>
      <img src={detail.image} alt="img" />
      <h3>
        {detail.firstName + " "}
        {detail.lastName}
      </h3>
      <p>
        <b>Age: </b>
        {detail.age}
      </p>
      <p>
        <b>Gender: </b>
        {detail.gender}
      </p>

      <div
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "end",
          gap: "5px",
        }}
      >
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete(detail.id);
          }}
        >
          ❌
        </button>
        <button onClick={(e) => e.stopPropagation()}>✏️</button>
      </div>
    </div>
  );
};

export default Card;

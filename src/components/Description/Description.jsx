import React from "react";

export const Description = ({item}) => {
  return (
    <div style={{ marginTop: "100px" }}>
      <h2>Описание</h2>

      <div className="decription">
        <p>{item.description}
        </p>
      </div>
    </div>
  );
};

import React from "react";

export const AboutHouse:React.FC = () => {
  return (
    <div style={{ marginTop: "100px" }}>
      <h2>О доме</h2>

      <div className="container-1">
        <div className="left_block">
          <span>Тип дома: </span>
          <span>Монолитный</span>
        </div>

        <div className="right_block">
          <p>
            <span>Этажей в доме: </span>
            <span>22</span>
          </p>
        </div>
      </div>
    </div>
  );
};

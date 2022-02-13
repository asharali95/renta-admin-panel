import React from "react";
import rentaBg from "../../Assets/renta-bg.jpg";
const Main = () => {
  return (
    <div
      style={{
        height: "calc(100vh - 80px)",
        textAlign: "center",
        backgroundImage: `url(${rentaBg})`,
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      {/* <h1
        style={{
          position: "absolute",
          fontSize: "50px",
          color: "white",
          transform: "translateX(500px)",
        }}
      >
        WELCOME TO RENTA
      </h1> */}
    </div>
  );
};

export default Main;

import React from "react";

const Mybutton = ({ text, fontSize, isChecked, alertMsg }) => {
  return (
    <button
      style={{
        backgroundColor: "blue",
        color: "white",
        width: "100px",
        height: "200px",
        padding: "10px 20px",
        border: 0,
        borderRadius: 10,
        margin: "10px",
        fontSize: `${fontSize}`,
        textDecoration: isChecked ? "line-through" : "none",
      }}
      onClick={() => {
        alert(alertMsg);
      }}
    >
      {text}
    </button>
  );
};

export default Mybutton;

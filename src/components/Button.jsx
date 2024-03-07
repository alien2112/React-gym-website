import React from "react";

export default function Button({ text, style, func }) {
  return (
    <button onClick={func} className={style}>
      <p>{text}</p>
    </button>
  );
}
Button.defaultProps = {
  text: "Click Me!",
  style:
    "px-8 mx-auto py-9 rounded-md border- [2px] bg-slate-950 border-blue-400 border-solid blueShadow duration-200",
};

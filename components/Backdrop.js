import React from "react";
import { useEffect } from "react";

const Backdrop = ({ show, clicked }) => {
  useEffect(() => {
    show && (document.body.style.overflow = "hidden");
    !show && (document.body.style.overflow = "unset");
  }, [show]);
  
  return (
    show && (
      <div
        className={`fixed top-0 left-0  w-screen h-screen bg-black/60 $ `}
        onClick={clicked}
      />
    )
  );
};

export default Backdrop;

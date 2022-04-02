import React from "react";
import { BsChevronLeft } from "react-icons/bs";

const LeftNav = React.memo(({ disabled, onClick }) => {
  return (
    <button
      type="button"
      className="absolute flex items-center justify-center text-white top-1/2 -translate-y-50 left-1 xl:left-4 z-50 h-12 w-12 bg-black/50"
      disabled={disabled}
      onClick={onClick}
      aria-label="Previous Slide"
    >
      <BsChevronLeft className="w-6 h-6" />
    </button>
  );
});

LeftNav.displayName = "LeftNav";

export default LeftNav;

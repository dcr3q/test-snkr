import React from "react";
import { BsChevronRight } from "react-icons/bs";

const RightNav = React.memo(({ disabled, onClick }) => {
  return (
    <button
      type="button"
      className="absolute flex items-center justify-center text-white top-1/2 -translate-y-50 right-1 xl:right-4 z-50 h-12 w-12 bg-black/50"
      disabled={disabled}
      onClick={onClick}
      aria-label="Next Slide"
    >
      <BsChevronRight className="w-6 h-6" />
    </button>
  );
});

RightNav.displayName = "RightNav";

export default RightNav;

import React from "react";

const sizeClasses = {
  txtOutfitSemiBold24: "font-outfit font-semibold",
  txtMontserratRomanBlack3935: "font-black font-montserrat",
  txtOutfitMedium12: "font-medium font-outfit",
  txtOutfitMedium12Indigo800: "font-medium font-outfit",
  txtOutfitRegular18: "font-normal font-outfit",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };

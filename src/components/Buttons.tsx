import React from "react";

type ButtonType = {
  onClick: () => void;
  label?: string;
  buttonStyle?: string;
  inverse?: boolean;
};

export const PrimaryButton = ({
  label = "See Product",
  onClick,
  buttonStyle,
}: ButtonType) => {
  return (
    <div className="px-8 py-3 border-none text-white bg-buttonOrange  hover:bg-accentLight hover:transition font-medium">
      <button className={`${buttonStyle} uppercase`} onClick={onClick}>
        {label}
      </button>
    </div>
  );
};

export const SecondaryButton = ({
  label = "See Product",
  onClick,
  buttonStyle,
  inverse = false,
}: ButtonType) => {
  return (
    <div
      className={`px-8 py-3 font-medium w-max ${
        inverse ? "secondary-btn-inverse" : "secondary-btn"
      }`}
    >
      <button className={`${buttonStyle} uppercase`} onClick={onClick}>
        {label}
      </button>
    </div>
  );
};

// export const SecondaryButton = ({
//   label = "See Product",
//   onClick,
//   buttonStyle,
// }: ButtonType) => {
//   return (
//     <div className={`px-8 py-3 font-medium`}>
//       <button className={`${buttonStyle} uppercase`} onClick={onClick}>
//         {label}
//       </button>
//     </div>
//   );
// };

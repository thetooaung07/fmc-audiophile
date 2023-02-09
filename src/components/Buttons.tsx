import { ButtonType } from "../common/models";

export const PrimaryButton = ({
  label = "See Product",
  onClick,
  buttonStyle,
}: ButtonType) => {
  return (
    <button
      className={`border-none bg-buttonOrange px-8 py-3 font-medium  text-white hover:bg-accentLight hover:transition ${buttonStyle} uppercase`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export const SecondaryButton = ({
  label = "See Product",
  onClick,
  buttonStyle,
  inverse = false,
}: ButtonType) => {
  return (
    <button
      className={`w-max px-8 py-3 font-medium ${
        inverse ? "secondary-btn-inverse" : "secondary-btn"
      } ${buttonStyle} uppercase`}
      onClick={onClick}
    >
      {label}
    </button>
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

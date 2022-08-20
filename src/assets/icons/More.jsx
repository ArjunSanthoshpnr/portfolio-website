const More = ({ color = "#000", ...props }) => (
  <svg
    viewBox="0 0 250 250"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect x={7} y={26} width={236} height={25} rx={20.5} fill={color} />
    <rect x={7} y={104} width={236} height={25} rx={21.5} fill={color} />
    <rect x={7} y={184} width={236} height={25} rx={20.5} fill={color} />
  </svg>
);

export default More;

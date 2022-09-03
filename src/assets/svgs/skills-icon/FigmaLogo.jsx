const FigmaLogo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <circle cx={20} cy={20} r={20} fill="#f0f0f0" />
    <path
      d="M16 33c2.208 0 4-1.792 4-4v-4h-4c-2.208 0-4 1.792-4 4s1.792 4 4 4z"
      fill="#0acf83"
    />
    <path
      d="M12 21c0-2.208 1.792-4 4-4h4v8h-4c-2.208 0-4-1.792-4-4z"
      fill="#a259ff"
    />
    <path
      d="M12 13c0-2.208 1.792-4 4-4h4v8h-4c-2.208 0-4-1.792-4-4z"
      fill="#f24e1e"
    />
    <path d="M20 9h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V9z" fill="#ff7262" />
    <path
      d="M28 21c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4z"
      fill="#1abcfe"
    />
  </svg>
);

export default FigmaLogo;

const VsCodeLogo = (props) => (
  <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx={20} cy={20} r={20} fill="#D4E7F8" />
    <mask
      id="a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={9}
      y={9}
      width={22}
      height={22}
    >
      <path
        d="M24.54 30.794a1.364 1.364 0 0 0 1.087-.041l4.512-2.172a1.37 1.37 0 0 0 .775-1.234v-14.72a1.37 1.37 0 0 0-.775-1.235l-4.512-2.171a1.364 1.364 0 0 0-1.557.265l-8.637 7.88-3.762-2.856a.912.912 0 0 0-1.166.052L9.3 15.66a.913.913 0 0 0-.001 1.35l3.262 2.977-3.262 2.976a.914.914 0 0 0 0 1.35l1.207 1.098a.912.912 0 0 0 1.166.052l3.762-2.856 8.637 7.88c.134.134.294.239.47.307Zm.9-15.782-6.555 4.975 6.554 4.975v-9.95Z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#a)">
      <path
        d="m30.152 11.395-4.515-2.174a1.365 1.365 0 0 0-1.558.265L9.298 22.963a.913.913 0 0 0 0 1.35l1.208 1.098a.912.912 0 0 0 1.166.052l17.8-13.504a.907.907 0 0 1 1.456.723v-.053a1.37 1.37 0 0 0-.776-1.234Z"
        fill="#0065A9"
      />
      <path
        d="m30.152 28.578-4.515 2.174a1.365 1.365 0 0 1-1.558-.265L9.298 17.01a.913.913 0 0 1 0-1.35l1.208-1.098a.913.913 0 0 1 1.166-.052l17.8 13.504a.907.907 0 0 0 1.456-.723v.053a1.37 1.37 0 0 1-.776 1.234Z"
        fill="#007ACC"
      />
      <path
        d="M25.623 30.754a1.366 1.366 0 0 1-1.558-.265.802.802 0 0 0 1.37-.568V10.055a.802.802 0 0 0-1.37-.568 1.366 1.366 0 0 1 1.558-.265l4.514 2.171a1.37 1.37 0 0 1 .776 1.235v14.72a1.37 1.37 0 0 1-.776 1.235l-4.514 2.17Z"
        fill="#1F9CF0"
      />
      <path
        d="M24.54 30.794a1.364 1.364 0 0 0 1.087-.042l4.512-2.17a1.37 1.37 0 0 0 .775-1.235v-14.72a1.37 1.37 0 0 0-.775-1.235l-4.512-2.171a1.364 1.364 0 0 0-1.557.265l-8.637 7.88-3.762-2.856a.913.913 0 0 0-1.166.052L9.3 15.66a.914.914 0 0 0-.001 1.35l3.262 2.977-3.262 2.976a.914.914 0 0 0 0 1.35l1.207 1.098a.912.912 0 0 0 1.166.052l3.762-2.856 8.637 7.88c.134.134.294.239.47.307Zm.9-15.782-6.555 4.975 6.554 4.974v-9.95Z"
        fill="#fff"
        fillOpacity={0.25}
      />
    </g>
  </svg>
);

export default VsCodeLogo;

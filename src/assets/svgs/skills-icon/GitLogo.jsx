const GitLogo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <circle cx={20} cy={20} r={20} fill="#f0f0f0" />
    <g clipPath="url(#a)">
      <path
        d="M31.546 18.93 21.067 8.452a1.55 1.55 0 0 0-2.188 0l-2.171 2.175 2.76 2.76a1.838 1.838 0 0 1 1.889.441 1.84 1.84 0 0 1 .438 1.9l2.658 2.66a1.835 1.835 0 0 1 1.9.435 1.84 1.84 0 0 1 0 2.604 1.837 1.837 0 0 1-2.6 0 1.846 1.846 0 0 1-.404-1.996l-2.489-2.476v6.525a1.84 1.84 0 0 1 .488.348 1.85 1.85 0 0 1 0 2.6c-.719.721-1.889.721-2.609 0s-.719-1.879 0-2.598c.182-.18.387-.316.605-.406v-6.589a1.834 1.834 0 0 1-.996-2.41L15.636 11.7 8.45 18.881c-.6.605-.6 1.584 0 2.189l10.48 10.477a1.545 1.545 0 0 0 2.186 0l10.43-10.43a1.544 1.544 0 0 0 0-2.187"
        fill="#e34919"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" transform="translate(8 8)" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default GitLogo;

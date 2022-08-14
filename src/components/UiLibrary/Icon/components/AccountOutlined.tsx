import * as React from 'react';

function AccountOutlined(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g
        transform="translate(1 1)"
        stroke="currentColor"
        strokeWidth={2}
        fill="none"
        fillRule="evenodd"
        strokeLinecap="square"
      >
        <path d="M0 22c0-5.523 4.477-10 10-10h2c5.523 0 10 4.477 10 10" />
        <circle cx={11} cy={6} r={6} />
      </g>
    </svg>
  );
}

export default AccountOutlined;

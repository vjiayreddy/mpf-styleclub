import * as React from 'react';

function HomeOutlined(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="m12 1.5-10 8v13h7v-7h6v7h7v-13z"
        stroke="currentColor"
        strokeWidth={2}
        fill="none"
        fillRule="evenodd"
        strokeLinecap="square"
      />
    </svg>
  );
}

export default HomeOutlined;

import * as React from 'react';

function FamilyOutlined(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M23 20v-5.5a5.5 5.5 0 0 0-8.663-4.5m-4.674 0A5.5 5.5 0 0 0 1 14.5V20m18-3-4 3 4-3ZM5 17l4 3-4-3Zm10 6v-3H9v3m3-6a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 17Zm5.5-11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM4 3.5a2.5 2.5 0 1 1 5.002.002A2.5 2.5 0 0 1 4 3.5Z"
        stroke="currentColor"
        strokeWidth={2}
        fill="none"
        fillRule="evenodd"
        strokeLinecap="square"
      />
    </svg>
  );
}

export default FamilyOutlined;

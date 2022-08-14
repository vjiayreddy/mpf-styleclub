import * as React from 'react';

function RemindersOutlined(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="none" fillRule="evenodd">
        <path
          d="M19 11V8A7 7 0 1 0 5 8v3c0 3.3-3 4.1-3 6 0 1.7 3.9 3 10 3s10-1.3 10-3c0-1.9-3-2.7-3-6Z"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="square"
        />
        <path
          d="M12 22a38.81 38.81 0 0 1-2.855-.1 2.992 2.992 0 0 0 5.71 0c-.894.066-1.844.1-2.855.1Z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default RemindersOutlined;

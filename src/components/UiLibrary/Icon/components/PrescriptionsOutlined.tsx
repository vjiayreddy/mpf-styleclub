import * as React from 'react';

function PrescriptionsOutlined(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g transform="translate(1 1)" stroke="currentColor" strokeWidth={2} fill="none" fillRule="evenodd">
        <path d="m11.759 20.243 8.484-8.484" />
        <path
          strokeLinecap="square"
          d="m4.967 4.967 3.964 3.964M16.883 6.046a4.993 4.993 0 0 0-8.417-4.579l-6.999 7a4.993 4.993 0 0 0 4.583 8.415"
        />
        <circle cx={16.001} cy={16.001} r={5.999} />
      </g>
    </svg>
  );
}

export default PrescriptionsOutlined;

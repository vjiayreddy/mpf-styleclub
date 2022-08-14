import * as React from 'react';

function LocationsOutlined(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g stroke="currentColor" strokeWidth={2} fill="none" fillRule="evenodd">
        <path
          strokeLinecap="square"
          d="M4 13v9h16v-9M4 2 1 7a2.992 2.992 0 0 0 5.667 1.347 2.977 2.977 0 0 0 5.333 0 2.977 2.977 0 0 0 5.333 0A2.992 2.992 0 0 0 23 7l-3-5H4Z"
        />
        <path d="M10 22v-6h4v6" />
      </g>
    </svg>
  );
}

export default LocationsOutlined;

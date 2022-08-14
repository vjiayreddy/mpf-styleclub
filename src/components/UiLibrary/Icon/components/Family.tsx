import * as React from 'react';

function Family(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g transform="translate(0 1)" fill="currentColor" fillRule="nonzero">
        <circle cx={6.5} cy={3.5} r={3.5} />
        <circle cx={17.5} cy={3.5} r={3.5} />
        <path d="M17.5 8a6.491 6.491 0 0 0-5.465 3 3 3 0 1 1-.07 0A6.49 6.49 0 0 0 0 14.5V21a1 1 0 0 0 1 1h7v-2.5l-3.6-2.7a1 1 0 0 1 1.2-1.6L9.333 18h5.334l3.733-2.8a1 1 0 1 1 1.2 1.6L16 19.5V22h7a1 1 0 0 0 1-1v-6.5A6.508 6.508 0 0 0 17.5 8Z" />
      </g>
    </svg>
  );
}

export default Family;

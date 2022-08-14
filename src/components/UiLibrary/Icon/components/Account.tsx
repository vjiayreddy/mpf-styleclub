import * as React from 'react';

function Account(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="currentColor" fillRule="nonzero">
        <circle cx={12} cy={7} r={7} />
        <path d="M18.333 13.387A8.974 8.974 0 0 1 12 16c-2.468 0-4.705-1-6.333-2.613C2.291 15.267 0 18.869 0 23v1h24v-1c0-4.131-2.291-7.733-5.667-9.613Z" />
      </g>
    </svg>
  );
}

export default Account;

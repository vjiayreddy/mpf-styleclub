import * as React from 'react';

function Prescriptions(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="currentColor" fillRule="nonzero">
        <path d="M21.182 11.395a6.991 6.991 0 0 0-9.787 9.787l9.787-9.787ZM12.808 22.595a6.991 6.991 0 0 0 9.787-9.787l-9.787 9.787Z" />
        <path d="M7.995 16.995a8.94 8.94 0 0 1 2.636-6.363L6.667 6.667l3.5-3.5a3.99 3.99 0 0 1 6.261 4.856c.188-.012.376-.028.567-.028.537.002 1.072.05 1.6.147a6 6 0 0 0-9.843-6.389l-7 7a6 6 0 0 0 6.39 9.842 9.052 9.052 0 0 1-.147-1.6Z" />
      </g>
    </svg>
  );
}

export default Prescriptions;

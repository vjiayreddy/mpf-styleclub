import * as React from 'react';

function ChevronLeft(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" {...props}>
      <path d="M11.508 0 13 1.217 6.633 8 13 14.783 11.508 16 4 8z" fill="currentColor" fillRule="evenodd" />
    </svg>
  );
}

export default ChevronLeft;

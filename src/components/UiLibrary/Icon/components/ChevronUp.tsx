import * as React from 'react';

function ChevronUp(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M16 11.008 14.783 12.5 8 6.133 1.217 12.5 0 11.008 8 3.5z" fill="currentColor" fillRule="evenodd" />
    </svg>
  );
}

export default ChevronUp;

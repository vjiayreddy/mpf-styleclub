import * as React from 'react';

function ChevronDown(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" {...props}>
      <path d="M16 4.992 14.783 3.5 8 9.867 1.217 3.5 0 4.992 8 12.5z" fill="currentColor" fillRule="evenodd" />
    </svg>
  );
}

export default ChevronDown;

import * as React from 'react';

function ChevronRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="1em" height="1em" {...props}>
      <path d="M5.492 0 4 1.217 10.367 8 4 14.783 5.492 16 13 8z" fillRule="evenodd" />
    </svg>
  );
}

export default ChevronRight;

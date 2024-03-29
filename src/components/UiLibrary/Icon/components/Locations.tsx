import * as React from 'react';

function Locations(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="currentColor" fillRule="nonzero">
        <path d="m23.857 6.483-3-4.998A1 1 0 0 0 20 1H4a1 1 0 0 0-.857.485l-3 4.998A.999.999 0 0 0 0 6.998a3.992 3.992 0 0 0 3.983 3.998h.008a3.975 3.975 0 0 0 2.674-1.024 3.977 3.977 0 0 0 5.332 0 3.977 3.977 0 0 0 5.337 0A3.993 3.993 0 0 0 24 6.998c0-.182-.05-.36-.143-.515Z" />
        <path d="M20.016 11.648c-.93 0-1.847-.221-2.679-.648l-.015.007a5.78 5.78 0 0 1-4.564.32 5.995 5.995 0 0 1-.76-.324l-.011.005a5.77 5.77 0 0 1-4.563.32 5.982 5.982 0 0 1-.759-.325 5.838 5.838 0 0 1-2.674.645A5.962 5.962 0 0 1 3 11.555v10.413C3 22.538 3.448 23 4 23h6v-6.192h4V23h6c.552 0 1-.462 1-1.032V11.551c-.325.06-.654.093-.984.097Z" />
      </g>
    </svg>
  );
}

export default Locations;

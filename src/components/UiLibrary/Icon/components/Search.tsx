import * as React from 'react';

function Search(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M12.72 11.23a6.804 6.804 0 0 0 1.392-4.174C14.112 3.18 11.032 0 7.155 0 3.28 0 .1 3.18.1 7.056s3.18 7.056 7.056 7.056c1.59 0 3.081-.497 4.174-1.392l2.982 2.982c.198.199.496.298.695.298.199 0 .497-.1.696-.298a.96.96 0 0 0 0-1.391L12.72 11.23Zm-5.565.795c-2.782 0-5.068-2.186-5.068-4.97 0-2.782 2.286-5.067 5.068-5.067 2.783 0 5.069 2.285 5.069 5.068 0 2.783-2.286 4.969-5.069 4.969Z"
        fill="currentColor"
        fillRule="nonzero"
        fillOpacity={0.8}
      />
    </svg>
  );
}

export default Search;

import * as React from 'react';

function Home(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="m22.625 8.72-10-8a1 1 0 0 0-1.25 0l-10 8A1 1 0 0 0 1 9.5v13a1 1 0 0 0 1 1h7v-8h6v8h7a1 1 0 0 0 1-1v-13a1 1 0 0 0-.375-.78Z"
        fill="currentColor"
        fillRule="nonzero"
      />
    </svg>
  );
}

export default Home;

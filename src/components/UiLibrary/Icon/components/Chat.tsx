import * as React from 'react';

function Chat(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M23 2H1v15h7l4 5 4-5h7z" fill="currentColor" fillRule="evenodd" />
    </svg>
  );
}

export default Chat;

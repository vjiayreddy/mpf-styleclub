import React from "react";
import AuthProtectedRoute from "../src/apollo/hoc/AuthProtected/AuthProtected";

const MessagePage = (props) => {
  const { session } = props;
  return (
    <div>
      <h2>Logged User</h2>
      {session && (
        <div>
          <h6>Name:{session.user?.fullName}</h6>
          <p>Name:{session.user?.token}</p>
        </div>
      )}
    </div>
  );
};

export default AuthProtectedRoute(MessagePage);

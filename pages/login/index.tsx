import React, { Fragment, useRef, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";

const LoginPage = () => {
  const { status } = useSession();
  const router = useRouter();
  const [error, setError] = useState<string>(null);
  const emailRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();

  const loginHandler = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const { error } = await signIn("credentials", {
      redirect: true,
      username: "jsmith@example.com",
      password: "1234",
    });
    if (error) setError(error);
  };

  if (status === "authenticated") {
    return router.push("/");
  }

  console.log(error);

  return (
    <Fragment>
      {status === "unauthenticated" && (
        <div>
          <p>{status}</p>
          <p>{error}</p>
          <h3>Login</h3>
          <button onClick={(e) => loginHandler(e)}>Login</button>
        </div>
      )}
    </Fragment>
  );
};

export default LoginPage;

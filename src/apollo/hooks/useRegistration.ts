import { useEffect } from "react";
import { errorState } from "./../reactiveState/index";
import { UserRegistrationPayload } from "./../../forms/Registration/index";
import { POST_USER_REGISTRATION } from "./../gqlQueries/index";
import { useMutation } from "@apollo/client";

export const useRegistration = () => {
  const [RegisterUser, { data: dataRU, error: errorRU, loading: loadingRU }] =
    useMutation(POST_USER_REGISTRATION);

  const gqlUserRegistration = async (payload: UserRegistrationPayload) => {
    const response = await RegisterUser({
      variables: {
        email: payload["email"],
        firstName: payload.firstName,
        lastName: payload["lastName"],
        fullName: `${payload["firstName"]} ${payload["firstName"]}`,
        password: payload["password"],
        phone: payload.phone,
        countryCode: "+91",
        redirectTo: "/",
      },
    });
    return new Promise((resolve, reject) => {
      if (response.data) {
        resolve(response.data);
      } else {
        console.log(response.errors);
        reject(response.errors);
      }
    });
  };

  useEffect(() => {
    if (errorRU) {
      errorState({
        errorTitle: "Registration Failed",
        errorMessage: errorRU.message,
      });
    }
  }, [errorRU]);

  return {
    gqlUserRegistration,
    loadingRU,
    dataRU,
  };
};

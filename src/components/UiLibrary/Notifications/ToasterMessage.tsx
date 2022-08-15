import React, { useEffect } from "react";
import { useReactiveVar } from "@apollo/client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { errorState } from "../../../apollo/reactiveState";

const ToasterMessage = () => {
  const _errorMessage = useReactiveVar(errorState);
  useEffect(() => {
    if (_errorMessage) {
      toast.error(_errorMessage.errorMessage, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, [_errorMessage]);

  return <ToastContainer />;
};

export default ToasterMessage;

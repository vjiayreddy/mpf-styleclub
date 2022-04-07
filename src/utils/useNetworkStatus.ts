import { useState, useEffect } from "react";
const useNetworkStatus = () => {
  const [networkStatus, setNetworkStatus] = useState<boolean>();
  const handleNetworkDetection = () => {
    if (typeof window !== undefined) {
      setNetworkStatus(window.navigator.onLine);
    }
  };
  useEffect(() => {
    if (typeof window !== undefined) {
      window.addEventListener("offline", handleNetworkDetection);
      window.addEventListener("online", handleNetworkDetection);
    }
    return () => {
      if (typeof window !== undefined) {
        window.removeEventListener("offline", handleNetworkDetection);
        window.removeEventListener("online", handleNetworkDetection);
      }
    };
  });
  return {
    networkStatus,
  };
};

export default useNetworkStatus;

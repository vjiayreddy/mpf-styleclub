import { makeVar } from "@apollo/client";

interface ErrorStateProps {
  errorTitle?: string;
  errorMessage?: string;
}

export const errorState = makeVar<ErrorStateProps | null>(null);

export type componentColors =
  | "inherit"
  | "primary"
  | "secondary"
  | "success"
  | "error"
  | "info"
  | "warning";

export type user = {
  id?: number | string;
  name?: string;
  email?: string;
  password?: string;
};

import { isValidPhoneNumber } from "libphonenumber-js";

const re =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
export const isValidEmail = (email: string): boolean => re.test(email);

export const isPhoneNumberValid = (phoneNumber: any) => {
  if (phoneNumber) {
    return isValidPhoneNumber(`+${phoneNumber}`);
  } else {
    return false;
  }
};

export const validateEmail = (email: string) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  }
  return "Please enter valid email address";
};

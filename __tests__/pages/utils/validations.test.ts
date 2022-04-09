import { isValidEmail } from "../../../src/utils/validations";

describe("is Valid Email", () => {
  it("valid email", () => {
    expect(isValidEmail("vijay@gmail.com")).toBe(true);
  });
  it("invalid email", () => {
    expect(isValidEmail("vijaygmail.com")).toBe(false);
  });
});

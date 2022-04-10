import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../../pages/index";

describe("Index Page", () => {
  it("should render", () => {
    render(<Home />);
  });
  it("Checkbox disables button on frist click and enables on second click",()=>{
    render(<Home/>);
    const checkBox = screen.getByRole('checkbox');
    const button = screen.getByRole("button");
    fireEvent.click(checkBox);
    expect(button).toBeDisabled();
    fireEvent.click(checkBox);
    expect(button).not.toBeDisabled();
  })
});

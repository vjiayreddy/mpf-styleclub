import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../../pages/index";

describe("Index Page", () => {
  it("should render", () => {
    render(<Home />);
  });
});

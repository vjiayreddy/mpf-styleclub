import React from "react";
import { render, screen } from "@testing-library/react";
import DefaultLayoutComponent from "../../src/components/Layouts/DefaultLayout";

describe("DefaultLayout Component", () => {
  it("DefaultLayout Component should render correctly", () => {
    render(<DefaultLayoutComponent />);
  });
});

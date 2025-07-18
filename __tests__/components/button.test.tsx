import { render, screen } from "@testing-library/react";
import { Button } from "../../components/button";

describe("Button", () => {
  it("renders children", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(<Button className="custom-btn">Styled</Button>);
    const btn = screen.getByText("Styled");
    expect(btn).toHaveClass("custom-btn");
  });

  it("renders as disabled", () => {
    render(<Button disabled>Disabled</Button>);
    const btn = screen.getByText("Disabled");
    expect(btn).toBeDisabled();
  });
});

import { render, screen } from "@testing-library/react";
import { Label } from "../../components/label";

describe("Label", () => {
  it("renders children", () => {
    render(<Label>Label Text</Label>);
    expect(screen.getByText("Label Text")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(<Label className="custom-class">Styled Label</Label>);
    const label = screen.getByText("Styled Label");
    expect(label).toHaveClass("custom-class");
  });

  it("renders with htmlFor prop", () => {
    render(<Label htmlFor="input-id">Label For Input</Label>);
    const label = screen.getByText("Label For Input");
    expect(label).toHaveAttribute("for", "input-id");
  });
});

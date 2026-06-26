import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import InteractiveControls from "./InteractiveControls";

describe("InteractiveControls Component", () => {
  it("renders correctly in normal state", () => {
    const onToggleMock = jest.fn();
    const { asFragment } = render(
      <InteractiveControls isAbnormal={false} onToggle={onToggleMock} />
    );

    expect(screen.getByText("System Simulator")).toBeInTheDocument();
    expect(
      screen.getByText("Trigger an artificial anomaly state to test dashboard responsiveness.")
    ).toBeInTheDocument();

    const button = screen.getByRole("button", { name: /TRIGGER ABNORMAL/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("bg-[var(--color-surface-bright)]");

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correctly in abnormal state", () => {
    const onToggleMock = jest.fn();
    const { asFragment } = render(
      <InteractiveControls isAbnormal={true} onToggle={onToggleMock} />
    );

    const button = screen.getByRole("button", { name: /RESTORE NORMAL/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("text-[#ff3366]");

    expect(asFragment()).toMatchSnapshot();
  });

  it("calls onToggle callback when button is clicked", () => {
    const onToggleMock = jest.fn();
    render(<InteractiveControls isAbnormal={false} onToggle={onToggleMock} />);

    const button = screen.getByRole("button", { name: /TRIGGER ABNORMAL/i });
    fireEvent.click(button);

    expect(onToggleMock).toHaveBeenCalledTimes(1);
  });
});

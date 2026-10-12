import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Segmented, type SegmentedOption } from "./Segmented";

const OPTIONS: SegmentedOption[] = [
  { value: "contract", label: "계약" },
  { value: "advisory", label: "자문" },
  { value: "litigation", label: "소송" },
];

describe("Segmented", () => {
  it("options만큼 라디오 버튼을 렌더링한다", () => {
    render(<Segmented options={OPTIONS} value="contract" onChange={vi.fn()} />);
    expect(screen.getAllByRole("radio")).toHaveLength(3);
  });

  it("value와 일치하는 옵션만 선택 상태(aria-checked)이다", () => {
    render(<Segmented options={OPTIONS} value="advisory" onChange={vi.fn()} />);
    expect(screen.getByRole("radio", { name: "계약" })).toHaveAttribute(
      "aria-checked",
      "false",
    );
    expect(screen.getByRole("radio", { name: "자문" })).toHaveAttribute(
      "aria-checked",
      "true",
    );
  });

  it("옵션 클릭 시 해당 value로 onChange가 호출된다", async () => {
    const onChange = vi.fn();
    render(
      <Segmented options={OPTIONS} value="contract" onChange={onChange} />,
    );
    await userEvent.click(screen.getByRole("radio", { name: "소송" }));
    expect(onChange).toHaveBeenCalledWith("litigation");
  });

  it("옵션이 2개여도 정상 동작한다", () => {
    const twoOptions = OPTIONS.slice(0, 2);
    render(
      <Segmented options={twoOptions} value="contract" onChange={vi.fn()} />,
    );
    expect(screen.getAllByRole("radio")).toHaveLength(2);
  });

  it("disabled 옵션은 클릭해도 onChange가 호출되지 않는다", async () => {
    const onChange = vi.fn();
    const optionsWithDisabled: SegmentedOption[] = [
      ...OPTIONS.slice(0, 2),
      { value: "litigation", label: "소송", disabled: true },
    ];
    render(
      <Segmented
        options={optionsWithDisabled}
        value="contract"
        onChange={onChange}
      />,
    );
    const litigation = screen.getByRole("radio", { name: "소송" });
    expect(litigation).toBeDisabled();
    await userEvent.click(litigation);
    expect(onChange).not.toHaveBeenCalled();
  });

  it("className을 병합한다", () => {
    render(
      <Segmented
        options={OPTIONS}
        value="contract"
        onChange={vi.fn()}
        className="extra"
      />,
    );
    expect(screen.getByRole("radiogroup")).toHaveClass("extra");
  });
});

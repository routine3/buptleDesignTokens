import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { TextButton } from "./TextButton";
import { Icon } from "../Icon";

describe("TextButton", () => {
  it("children을 텍스트로 렌더링한다", () => {
    render(<TextButton>수정</TextButton>);
    expect(screen.getByRole("button", { name: "수정" })).toBeInTheDocument();
  });

  it("클릭 시 onClick 핸들러가 호출된다", async () => {
    const onClick = vi.fn();
    render(<TextButton onClick={onClick}>수정</TextButton>);
    await userEvent.click(screen.getByRole("button", { name: "수정" }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("기본값은 size=small이다", () => {
    render(<TextButton>수정</TextButton>);
    const classNames = screen.getByRole("button").className;
    expect(classNames).toMatch(/small/);
  });

  it("size=large이면 large 관련 클래스를 적용한다", () => {
    render(<TextButton size="large">수정</TextButton>);
    const classNames = screen.getByRole("button").className;
    expect(classNames).toMatch(/large/);
  });

  it("icon이 있으면 텍스트 뒤에 렌더링한다", () => {
    render(
      <TextButton icon={<Icon name="link" title="링크" />}>수정</TextButton>,
    );
    const button = screen.getByRole("button");
    const children = Array.from(button.childNodes);
    const iconWrapperIndex = children.findIndex(
      (node) => node instanceof HTMLElement && node.querySelector("svg"),
    );
    expect(iconWrapperIndex).toBe(children.length - 1);
  });

  it("icon이 없으면 아이콘 wrapper를 렌더링하지 않는다", () => {
    render(<TextButton>수정</TextButton>);
    expect(screen.getByRole("button").querySelector("svg")).toBeNull();
  });

  it("disabled 상태에서는 클릭 핸들러가 호출되지 않는다", async () => {
    const onClick = vi.fn();
    render(
      <TextButton onClick={onClick} disabled>
        비활성
      </TextButton>,
    );
    const button = screen.getByRole("button", { name: "비활성" });
    expect(button).toBeDisabled();
    await userEvent.click(button);
    expect(onClick).not.toHaveBeenCalled();
  });

  it("className을 병합한다", () => {
    render(<TextButton className="extra">수정</TextButton>);
    expect(screen.getByRole("button")).toHaveClass("extra");
  });
});

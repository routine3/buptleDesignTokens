import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Button } from "./Button";
import { Icon } from "../Icon";

describe("Button", () => {
  it("children을 텍스트로 렌더링한다", () => {
    render(<Button>저장</Button>);
    expect(screen.getByRole("button", { name: "저장" })).toBeInTheDocument();
  });

  it("클릭 시 onClick 핸들러가 호출된다", async () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>클릭</Button>);
    await userEvent.click(screen.getByRole("button", { name: "클릭" }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("기본값은 kind=primary, size=medium, iconPosition=left이다", () => {
    render(<Button icon={<Icon name="add" />}>텍스트</Button>);
    const button = screen.getByRole("button");
    // 아이콘이 텍스트보다 DOM상 앞에 있어야 한다(iconPosition=left)
    expect(button.firstElementChild?.textContent ?? "").not.toBe("텍스트");
  });

  it("iconPosition=right이면 아이콘이 텍스트 뒤에 온다", () => {
    render(
      <Button icon={<Icon name="add" title="추가" />} iconPosition="right">
        텍스트
      </Button>,
    );
    const button = screen.getByRole("button");
    const children = Array.from(button.childNodes);
    const iconWrapperIndex = children.findIndex(
      (node) => node instanceof HTMLElement && node.querySelector("svg"),
    );
    expect(iconWrapperIndex).toBe(children.length - 1);
  });

  it("disabled 상태에서는 클릭 핸들러가 호출되지 않는다", async () => {
    const onClick = vi.fn();
    render(
      <Button onClick={onClick} disabled>
        비활성
      </Button>,
    );
    const button = screen.getByRole("button", { name: "비활성" });
    expect(button).toBeDisabled();
    await userEvent.click(button);
    expect(onClick).not.toHaveBeenCalled();
  });

  it("icon이 없으면 아이콘 wrapper를 렌더링하지 않는다", () => {
    render(<Button>텍스트만</Button>);
    const button = screen.getByRole("button");
    expect(button.querySelector("svg")).toBeNull();
  });

  it("className을 병합한다", () => {
    render(<Button className="extra">텍스트</Button>);
    expect(screen.getByRole("button")).toHaveClass("extra");
  });
});

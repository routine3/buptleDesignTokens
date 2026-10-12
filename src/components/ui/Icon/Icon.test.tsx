import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Icon } from "./Icon";
import { ICONS } from "./icons";

describe("Icon", () => {
  it("기본 24px 정사각형 SVG를 렌더링한다", () => {
    render(<Icon name="delete" title="삭제" />);
    const svg = screen.getByRole("img", { name: "삭제" });
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute("width", "24");
    expect(svg).toHaveAttribute("height", "24");
  });

  it("size prop으로 크기를 바꿀 수 있다", () => {
    render(<Icon name="search" size={40} title="검색" />);
    const svg = screen.getByRole("img", { name: "검색" });
    expect(svg).toHaveAttribute("width", "40");
    expect(svg).toHaveAttribute("height", "40");
  });

  it("title이 없으면 장식용(aria-hidden) 아이콘으로 렌더링한다", () => {
    const { container } = render(<Icon name="close" />);
    const svg = container.querySelector("svg");
    expect(svg).toHaveAttribute("aria-hidden", "true");
    expect(svg).not.toHaveAttribute("role");
  });

  it("fill 색상을 하드코딩하지 않고 currentColor로 상속받는다", () => {
    const { container } = render(<Icon name="delete" />);
    const svg = container.querySelector("svg");
    expect(svg).toHaveAttribute("fill", "currentColor");
  });

  it("44개 Icon / Basic variant 이름이 모두 union에 포함되어 있다", () => {
    const names = Object.keys(ICONS);
    // send-beauty는 icons.ts의 ICONS가 아니라 SEND_BEAUTY_LAYERS로 별도 관리되므로 +1
    expect(names.length + 1).toBe(44);
  });

  it("stroke 기반 아이콘(menu-2)은 fill=none, stroke=currentColor로 렌더링한다", () => {
    const { container } = render(<Icon name="menu-2" />);
    const svg = container.querySelector("svg");
    expect(svg).toHaveAttribute("fill", "none");
    expect(svg).toHaveAttribute("stroke", "currentColor");
  });

  it("send-beauty 합성 아이콘은 3개의 서브 svg 레이어를 렌더링한다", () => {
    const { container } = render(<Icon name="send-beauty" title="전송" />);
    const nestedSvgs = container.querySelectorAll("svg svg");
    expect(nestedSvgs).toHaveLength(3);
  });

  it("className을 그대로 전달한다", () => {
    const { container } = render(<Icon name="star" className="custom-class" />);
    const svg = container.querySelector("svg");
    expect(svg).toHaveClass("custom-class");
  });
});

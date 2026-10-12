import type { ButtonHTMLAttributes, ReactNode } from "react";
import "../../../tokens/colors.css";
import "../../../tokens/spacing.css";
import "../../../tokens/typography.css";
import "../../../tokens/radius.css";
import styles from "./Button.module.css";

/**
 * Figma: `00 Components` › `Buttons` › "Button / Basic" 컴포넌트 세트
 * (node-id 3354:26920, https://www.figma.com/design/mp4KoPM2jqzU2N9yGVBSrf?node-id=3354-26920)
 *
 * Figma variant → props 매핑
 *  - Kind(Primary/Secondary/Secondary Solid/Tertiary/Solid/Negative) → `kind`
 *    ("Secondary Solid"는 정규화 규칙(공백→하이픈)에 따라 "secondary-solid")
 *  - Size(Medium/Small) → `size`
 *  - Status(Default/Hover) → props 아님, CSS :hover 의사클래스로 구현
 *  - IconPosition(Left/Right) → `iconPosition`. Figma에는 Primary+Medium 조합에만
 *    Right가 실존하지만(4416:44497/44501), 컴포넌트 레벨에서 다른 kind/size 조합의
 *    iconPosition="right" 사용을 막지는 않기로 했다 — Figma의 제약이 미래 확장까지
 *    막을 이유는 없다고 판단(가정으로 보고서에 기록).
 */
export type ButtonKind =
  | "primary"
  | "secondary"
  | "secondary-solid"
  | "tertiary"
  | "solid"
  | "negative";
export type ButtonSize = "medium" | "small";
export type ButtonIconPosition = "left" | "right";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  kind?: ButtonKind;
  size?: ButtonSize;
  /** 아이콘 슬롯. Icon 컴포넌트(`<Icon name="..." />`)를 포함해 임의의 ReactNode를 받는다. */
  icon?: ReactNode;
  iconPosition?: ButtonIconPosition;
  children: ReactNode;
}

const kindClassMap: Record<ButtonKind, string> = {
  primary: styles.primary,
  secondary: styles.secondary,
  "secondary-solid": styles.secondarySolid,
  tertiary: styles.tertiary,
  solid: styles.solid,
  negative: styles.negative,
};

export function Button({
  kind = "primary",
  size = "medium",
  icon,
  iconPosition = "left",
  children,
  className,
  type = "button",
  ...rest
}: ButtonProps) {
  const classNames = [
    styles.button,
    styles[size],
    kindClassMap[kind],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const iconSlot = icon ? (
    <span className={styles.icon} aria-hidden="true">
      {icon}
    </span>
  ) : null;

  return (
    <button type={type} className={classNames} {...rest}>
      {iconPosition === "left" && iconSlot}
      {children}
      {iconPosition === "right" && iconSlot}
    </button>
  );
}

import type { ButtonHTMLAttributes, ReactNode } from "react";

/**
 * Figma: Section 1 › Buttons › "Button / Bagic"(사각) · "Button / Rounded"(pill)
 * (node 3354:26892, https://figma.com/design/mp4KoPM2jqzU2N9yGVBSrf?node-id=4301-22510)
 *
 * 두 프레임은 kind/status별 색상이 완전히 동일 — 모서리(사각 4px vs pill)만 다릅니다.
 *
 * 코드화하지 않은 것: kind="Button"과 kind="Hover Solid" (둘 다 Small 전용, Medium 짝이 없는
 * 나홀로 variant). Tertiary-Small / Solid-Small-Hover와 거의 겹쳐서, 의도한 별도 variant인지
 * 정리하다 남은 잔재인지 디자이너 확인 필요.
 */

export type ButtonKind =
  "primary" | "secondary" | "tertiary" | "solid" | "negative";
export type ButtonSize = "medium" | "small";

export interface ButtonProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "className"
> {
  kind?: ButtonKind;
  size?: ButtonSize;
  /** false(기본) = 4px 모서리("Button / Bagic"), true = pill("Button / Rounded"). */
  pill?: boolean;
  icon?: ReactNode;
  children: ReactNode;
}

const sizeClasses: Record<ButtonSize, string> = {
  medium: "h-[40px] gap-8 px-24 text-label-md",
  // Figma는 kind별로 Small 높이가 30px/32px로 갈리는데(Primary·Secondary=32, 나머지=30),
  // 버튼 하나에 kind마다 높이가 다르면 정렬이 깨지므로 32px로 통일했습니다.
  small: "h-[32px] gap-4 px-16 text-label-sm",
};

const kindClasses: Record<ButtonKind, string> = {
  primary:
    "bg-brand-primary text-contents-white hover:bg-blue-800 disabled:bg-state-inherit disabled:text-contents-tertiary",
  secondary:
    "border border-brand-primary text-brand-primary bg-transparent hover:border-blue-800 hover:text-blue-800 disabled:border-border-default disabled:text-contents-tertiary",
  tertiary:
    "bg-brand-tertiary text-contents-secondary hover:bg-yellow-500 disabled:bg-state-inherit disabled:text-contents-tertiary",
  solid:
    "bg-surface-container border border-border-default text-contents-secondary hover:bg-state-inherit hover:border-border-active disabled:bg-state-inherit disabled:border-border-default disabled:text-contents-tertiary",
  negative:
    "bg-state-inherit text-contents-secondary hover:bg-gray-300 disabled:text-contents-tertiary",
};

export function Button({
  kind = "primary",
  size = "medium",
  pill = false,
  icon,
  children,
  disabled,
  ...rest
}: ButtonProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      className={`inline-flex items-center justify-center font-semibold whitespace-nowrap transition-colors disabled:cursor-not-allowed ${pill ? "rounded-full" : "rounded-[4px]"} ${sizeClasses[size]} ${kindClasses[kind]}`}
      {...rest}
    >
      {icon}
      {children}
    </button>
  );
}

/**
 * Figma: "Button / Icon" (node 3354:27018) — 아이콘 전용 pill 버튼.
 * 원본에 kind="file"일 때만 배경이 채워지는 예외가 있었는데, 다른 kind(add/reset/download/more)와
 * 시각적으로 이질적이라 Figma 쪽 실수로 보고 통일된 outline 스타일만 반영했습니다.
 */
export interface IconButtonProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "className"
> {
  icon: ReactNode;
  "aria-label": string;
}

export function IconButton({ icon, disabled, ...rest }: IconButtonProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      className="inline-flex items-center justify-center gap-4 px-8 py-4 rounded-full border border-border-default text-contents-secondary hover:border-border-active disabled:opacity-50 disabled:cursor-not-allowed"
      {...rest}
    >
      {icon}
    </button>
  );
}

/**
 * Figma: "Text_Button_M" / "Text_Button_S" (node 960:5183 / 960:5384) — 텍스트형 버튼.
 * variant="link"은 밑줄 + brand-primary 색상("link Button"), variant="text"는 회색 순수 텍스트 버튼.
 * 두 사이즈 모두 Figma 원본 폰트 크기(15px / 12px)가 typography.json의 14종 스타일에 없는
 * 버튼 전용 값이라, 토큰이 아닌 임의값을 그대로 사용했습니다.
 */
export type TextButtonSize = "medium" | "small";

export interface TextButtonProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "className"
> {
  size?: TextButtonSize;
  variant?: "text" | "link";
  icon?: ReactNode;
  children: ReactNode;
}

const textButtonSizeClasses: Record<TextButtonSize, string> = {
  medium: "text-[15px] leading-[22px]",
  small: "text-[12px] leading-[16px]",
};

export function TextButton({
  size = "medium",
  variant = "text",
  icon,
  children,
  ...rest
}: TextButtonProps) {
  return (
    <button
      type="button"
      className={`inline-flex items-center gap-4 font-bold whitespace-nowrap ${textButtonSizeClasses[size]} ${
        variant === "link"
          ? "text-brand-primary underline underline-offset-2"
          : "text-contents-secondary"
      }`}
      {...rest}
    >
      {icon}
      {children}
    </button>
  );
}

import { forwardRef, useId } from "react";
import type { InputHTMLAttributes } from "react";
import inputErrorIcon from "../assets/icons/input-error.svg";
import inputSuccessIcon from "../assets/icons/input-success.svg";

/**
 * Figma: Section 1 › Input › "Input / Field" (node 3354:11198)
 * https://figma.com/design/mp4KoPM2jqzU2N9yGVBSrf?node-id=4301-22510
 *
 * Figma는 Hover/Active를 별도 "State" variant로 뒀지만, 여기서는 진짜 <input>이라
 * 그 둘은 CSS :hover/:focus로 자연스럽게 처리하고, error/success/disabled만
 * 실제로 제어가 필요한 prop으로 남겼습니다.
 */

export type InputFieldSize = "small" | "medium" | "large";

export interface InputFieldProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "className" | "size"
> {
  size?: InputFieldSize;
  /** size="large"일 때만 의미 있음 — 테두리 위 플로팅 라벨 (Figma "State=Label/Active"). */
  label?: string;
  /** 값이 있으면 에러 상태가 되고 필드 아래에 메시지를 표시합니다. */
  error?: string;
  success?: boolean;
  className?: string;
}

const sizeClasses: Record<InputFieldSize, string> = {
  small: "h-[40px]",
  medium: "h-[48px]",
  large: "h-[56px]",
};

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  function InputField(
    {
      size = "medium",
      label,
      error,
      success,
      disabled,
      id,
      className,
      ...rest
    },
    ref,
  ) {
    const generatedId = useId();
    const inputId = id ?? generatedId;
    const hasLabel = size === "large" && !!label;
    const hasIcon = !!error || success;

    return (
      <div className={className}>
        <div className="relative">
          <input
            ref={ref}
            id={inputId}
            disabled={disabled}
            className={`peer w-full rounded-[4px] border-[1.5px] bg-surface-container px-16 text-paragraph-md text-contents-primary outline-none placeholder:text-contents-tertiary disabled:cursor-not-allowed disabled:bg-zinc-100 disabled:text-contents-transparent ${sizeClasses[size]} ${hasIcon ? "pr-40" : ""} ${
              error
                ? "border-state-error"
                : success
                  ? "border-state-success"
                  : "border-border-default hover:border-border-active focus:border-brand-primary"
            }`}
            {...rest}
          />
          {hasLabel && (
            <label
              htmlFor={inputId}
              className="absolute -top-[9px] left-[12px] bg-surface-container px-4 text-label-xs text-contents-tertiary peer-focus:text-brand-primary"
            >
              {label}
            </label>
          )}
          {error && (
            <img
              alt=""
              src={inputErrorIcon}
              className="absolute right-8 top-1/2 size-24 -translate-y-1/2"
            />
          )}
          {!error && success && (
            <img
              alt=""
              src={inputSuccessIcon}
              className="absolute right-8 top-1/2 size-24 -translate-y-1/2"
            />
          )}
        </div>
        {error && (
          <p className="mt-4 text-paragraph-sm text-state-error">{error}</p>
        )}
      </div>
    );
  },
);

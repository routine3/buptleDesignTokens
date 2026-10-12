import type { ButtonHTMLAttributes, ReactNode } from "react";
import "../../../tokens/colors.css";
import "../../../tokens/spacing.css";
import "../../../tokens/typography.css";
import styles from "./TextButton.module.css";

/**
 * Figma: "법틀 디자인시스템 v1"(fileKey jRZzfr9vGsyGKCvT5HS0Gp) `02 Components`
 * › `Link` 섹션(82:111) › `TextButton` 컴포넌트 세트(node-id 326:1590, Link 82:110
 * 바로 오른쪽에 배치, 2026-10-01 생성·퍼블리시 완료).
 *
 * 같은 섹션의 `Link`(82:110)는 네비게이션용이라 hover 시 밑줄이 들어가지만,
 * TextButton은 "수정" 같은 액션 트리거용이라 밑줄 없이 hover 시 색만 진해진다
 * (사용자 결정, 2026-10-01: "링크용은 언더라인, 액션용 텍스트 버튼은 언더라인 없이
 * 별도 컴포넌트로"). 관련 메모리: project_link-vs-action-button-naming.
 *
 * Figma variant → props 매핑
 *  - Size(Small/Large) → `size`
 *  - State(Default/Hover/Disabled) → props 아님, :hover/:disabled 의사클래스로 구현
 *  - showIcon → `icon` 유무. 아이콘은 항상 텍스트 우측에만 존재해(좌측 슬롯 없음)
 *    iconPosition prop은 두지 않았다.
 *  - Disabled 색상: Small/Large 모두 Brand/Primary + opacity 40%로 통일
 *    (Link와 동일한 처리 — 기존 Button 컴포넌트도 kind 불문 opacity 하나로
 *    disabled를 통일 처리하는 것과 같은 패턴).
 */
export type TextButtonSize = "small" | "large";

export interface TextButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: TextButtonSize;
  /** 아이콘 슬롯. 항상 텍스트 우측에 렌더링된다. */
  icon?: ReactNode;
  children: ReactNode;
}

export function TextButton({
  size = "small",
  icon,
  children,
  className,
  type = "button",
  ...rest
}: TextButtonProps) {
  const classNames = [styles.textButton, styles[size], className]
    .filter(Boolean)
    .join(" ");

  return (
    <button type={type} className={classNames} {...rest}>
      {children}
      {icon ? (
        <span className={styles.icon} aria-hidden="true">
          {icon}
        </span>
      ) : null}
    </button>
  );
}

import "../../../tokens/colors.css";
import "../../../tokens/spacing.css";
import "../../../tokens/typography.css";
import "../../../tokens/radius.css";
import styles from "./Segmented.module.css";

/**
 * Figma: "법틀 디자인시스템 v1"(fileKey jRZzfr9vGsyGKCvT5HS0Gp) `02 Components`
 * › `Tab` 섹션(82:78) › 원자 `Segment`(334:1584) + 조립체 `Segmented`(334:1585).
 *
 * 단일선택 세그먼트 컨트롤, 옵션 2~3개(예: 계약/자문/소송). Figma에서는
 * `Segment`를 2~3개 인스턴스로 배치하고 3번째에 `Show` boolean을 다는
 * 방식으로 가변 개수를 구현했는데, 코드에서는 그걸 그대로 흉내내는 대신
 * `options` 배열로 받아 자연스럽게 2~3개를 표현한다.
 *
 * Figma variant → props 매핑
 *  - `Segment`의 Selected(True/False) → 각 옵션이 `value`와 일치하는지로 계산
 *  - `Segment`의 State(Default/Hover/Disabled) → props 아님, :hover/:disabled 의사클래스
 *  - `Segment`의 Text → `SegmentedOption.label`
 *  - `Segmented`의 Show(3번째 슬롯) → `options.length`(2개면 Show=false와 동일 효과)
 */
export interface SegmentedOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SegmentedProps {
  /** 2~3개 권장(Figma 원본 구조가 2~3개 기준) */
  options: SegmentedOption[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export function Segmented({
  options,
  value,
  onChange,
  className,
}: SegmentedProps) {
  const containerClassNames = [styles.segmented, className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={containerClassNames} role="radiogroup">
      {options.map((option) => {
        const selected = option.value === value;
        const segmentClassNames = [styles.segment, selected && styles.selected]
          .filter(Boolean)
          .join(" ");

        return (
          <button
            key={option.value}
            type="button"
            role="radio"
            aria-checked={selected}
            className={segmentClassNames}
            disabled={option.disabled}
            onClick={() => onChange(option.value)}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}

import type { SVGAttributes } from "react";
import {
  ICONS,
  SEND_BEAUTY_LAYERS,
  type IconGlyph,
  type SimpleIconName,
} from "./icons";

/**
 * Figma: `00 Components` › `Icons` › "Icon / Basic" 컴포넌트 세트
 * (node-id 3353:27091, variant property `Name`, 44개 값)
 * https://www.figma.com/design/mp4KoPM2jqzU2N9yGVBSrf?node-id=3353-27091
 *
 * variant 이름 정규화 규칙(대문자→소문자, 공백→하이픈) 적용 + 아래 3가지는 추가로 손을 댔다:
 * - "Icon"(레이어명 자체가 의미 없음) → "generic"
 * - "refrash"(Figma 원본 오타) → "refresh"
 * - "Attachment2"/"Upload"(2번째)/"Menu"(2번째) → "attachment-2"/"upload-2"/"menu-2"
 *   (Figma 원본에 동일한 Name 값이 2개씩 존재해 이름이 실제로 충돌함 — 벡터가 서로 달라 병합하지 않고
 *   레거시 `src/components/Icon.tsx`와 동일하게 구분해서 보존했다.)
 */
export type IconName = SimpleIconName | "send-beauty";

export interface IconProps extends Omit<SVGAttributes<SVGSVGElement>, "fill"> {
  name: IconName;
  /** px, 정사각형. Figma 원본과 동일한 기본값 24px */
  size?: number;
  className?: string;
  /** 접근성 라벨. 생략하면 장식용 아이콘(aria-hidden)으로 처리 */
  title?: string;
}

export function Icon({
  name,
  size = 24,
  className,
  title,
  ...rest
}: IconProps) {
  const a11yProps = title
    ? { role: "img" as const, "aria-label": title }
    : { "aria-hidden": true as const };

  if (name === "send-beauty") {
    // Figma 원본이 서로 다른 크기의 벡터 3개를 회전/좌우반전해 겹친 합성 아이콘이라
    // 레이어 구조(퍼센트 inset + transform)를 그대로 이식했다.
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        className={className}
        style={{ display: "block", position: "relative", overflow: "visible" }}
        {...a11yProps}
        {...rest}
      >
        {SEND_BEAUTY_LAYERS.map((layer) => {
          // inset(top/right/bottom/left, %)을 24x24 캔버스 기준 x/y/width/height로 환산
          const top = (parseFloat(layer.inset.top) / 100) * 24;
          const right = (parseFloat(layer.inset.right) / 100) * 24;
          const bottom = (parseFloat(layer.inset.bottom) / 100) * 24;
          const left = (parseFloat(layer.inset.left) / 100) * 24;
          const w = 24 - left - right;
          const h = 24 - top - bottom;
          const cy = top + h / 2;
          // Figma 원본 CSS(-rotate-180 -scale-x-100)를 합성하면 x축은 원위치로 상쇄되고
          // y축만 박스 중심(cy) 기준으로 뒤집히는 결과와 수학적으로 동일하다 (rotate180=diag(-1,-1),
          // scaleX(-1)=diag(-1,1) → 곱하면 diag(1,-1), 즉 세로 방향 반전만 남음).
          return (
            <svg
              key={layer.key}
              x={left}
              y={top}
              width={w}
              height={h}
              viewBox={layer.viewBox}
              fill="currentColor"
              transform={`matrix(1 0 0 -1 0 ${2 * cy})`}
            >
              {layer.paths.map((d) => (
                <path key={d.slice(0, 12)} d={d} />
              ))}
            </svg>
          );
        })}
      </svg>
    );
  }

  const glyph: IconGlyph = ICONS[name];

  return (
    <svg
      width={size}
      height={size}
      viewBox={glyph.viewBox}
      fill={glyph.stroke ? "none" : "currentColor"}
      stroke={glyph.stroke ? "currentColor" : undefined}
      strokeWidth={glyph.stroke?.width}
      strokeLinecap={glyph.stroke ? "round" : undefined}
      strokeLinejoin={glyph.stroke ? "round" : undefined}
      className={className}
      style={{ display: "block" }}
      {...a11yProps}
      {...rest}
    >
      {glyph.paths.map((p) => (
        <path
          key={p.d.slice(0, 12)}
          d={p.d}
          fillRule={p.fillRule}
          clipRule={p.clipRule}
        />
      ))}
    </svg>
  );
}

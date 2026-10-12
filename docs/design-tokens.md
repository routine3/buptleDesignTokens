# 디자인 토큰 매핑 테이블

> Figma 변수명 ↔ CSS custom property 매핑.
> Claude Code가 Figma 디자인 구현 시 이 문서를 참조합니다.
> 토큰 추가/변경 시 이 문서도 업데이트하세요.
>
> 출처: Figma 파일 `1. 법틀 법무솔루션 2.9` (fileKey `mp4KoPM2jqzU2N9yGVBSrf`) 중
> **"Design Tokens 2.9" 리뷰보드 (node-id 4269-2)** 안의 `01 Color — Primitive`,
> `02 Color — Semantic`, `03 Typography`, `04 Spacing & Radius`, `05 Elevation` 섹션을 추출.
> 다른 페이지의 값은 포함하지 않음. Radius는 아직 실제 Figma 변수가 아닌 보드 제안값입니다.

## 네이밍 규칙

Figma `/` → CSS `-` 변환. 예: `color/bg/primary` → `--color-bg-primary`

Style Dictionary JSON에서는 Primitive → Semantic 참조 구조를 `{path.to.token}` 문법으로 유지합니다
(값을 복사하지 않고 alias로 연결). 예: `tokens/colors.json`의 `color.brand.primary.value`는
`"{color.primitive.blue.600}"`이며, 빌드된 CSS는 `--color-brand-primary: var(--color-primitive-blue-600);`
형태로 참조를 그대로 보존합니다 (`outputReferences: true`).

## 색상 — Primitive (원시 팔레트, 40개)

Figma "01 Color — Primitive" 보드 원문 설명: "원시 팔레트 40개입니다. 컬럼은 명도 단계이며,
빈 칸은 해당 단계가 정의되지 않은 곳입니다. **제품 구현에서는 Semantic 보드의 토큰을 사용하세요.**"
→ 컴포넌트 구현 시 아래 Primitive 값을 직접 쓰지 말고, 반드시 Semantic 토큰(다음 표)을 사용할 것.

| Figma 변수명 | CSS Property                   | 값      |
| ------------ | ------------------------------ | ------- |
| White        | `--color-primitive-white`      | #ffffff |
| Blue/800     | `--color-primitive-blue-800`   | #1e40af |
| Blue/600     | `--color-primitive-blue-600`   | #2563eb |
| Blue/300     | `--color-primitive-blue-300`   | #93c5fd |
| Blue/200     | `--color-primitive-blue-200`   | #bfdbfe |
| Blue/50      | `--color-primitive-blue-50`    | #eff6ff |
| Sky/700      | `--color-primitive-sky-700`    | #0369a1 |
| Sky/600      | `--color-primitive-sky-600`    | #0284c7 |
| Sky/500      | `--color-primitive-sky-500`    | #0ea5e9 |
| Sky/200      | `--color-primitive-sky-200`    | #bae6fd |
| Sky/100      | `--color-primitive-sky-100`    | #e0f2fe |
| Sky/50       | `--color-primitive-sky-50`     | #ecfeff |
| Teal/700     | `--color-primitive-teal-700`   | #0f766e |
| Teal/500     | `--color-primitive-teal-500`   | #14b8a6 |
| Emerald/50   | `--color-primitive-emerald-50` | #ecfdf5 |
| Green/600    | `--color-primitive-green-600`  | #16a34a |
| Green/500    | `--color-primitive-green-500`  | #22c55e |
| Green/100    | `--color-primitive-green-100`  | #bef264 |
| Green/50     | `--color-primitive-green-50`   | #f0fdf4 |
| Yellow/500   | `--color-primitive-yellow-500` | #eab308 |
| Yellow/400   | `--color-primitive-yellow-400` | #facc15 |
| Yellow/300   | `--color-primitive-yellow-300` | #fde047 |
| Yellow/100   | `--color-primitive-yellow-100` | #fef9c3 |
| Yellow/50    | `--color-primitive-yellow-50`  | #fffbeb |
| Orange/400   | `--color-primitive-orange-400` | #fb923c |
| Red/500      | `--color-primitive-red-500`    | #ef4444 |
| Red/300      | `--color-primitive-red-300`    | #fca5a5 |
| Red/50       | `--color-primitive-red-50`     | #fef2f2 |
| Gray/950     | `--color-primitive-gray-950`   | #030712 |
| Gray/600     | `--color-primitive-gray-600`   | #525252 |
| Gray/500     | `--color-primitive-gray-500`   | #737373 |
| Gray/400     | `--color-primitive-gray-400`   | #a3a3a3 |
| Gray/300     | `--color-primitive-gray-300`   | #d4d4d4 |
| Gray/200     | `--color-primitive-gray-200`   | #e5e5e5 |
| Gray/100     | `--color-primitive-gray-100`   | #f5f5f5 |
| Gray/50      | `--color-primitive-gray-50`    | #f9fafb |
| Slate/300    | `--color-primitive-slate-300`  | #cbd5e1 |
| Slate/200    | `--color-primitive-slate-200`  | #e2e8f0 |
| Slate/100    | `--color-primitive-slate-100`  | #f1f5f9 |
| Zinc/300     | `--color-primitive-zinc-300`   | #d4d4d8 |

## 색상 — Semantic (컴포넌트에서 사용할 토큰, 33개)

각 값은 위 Primitive 팔레트를 alias로 참조합니다 (하드코딩 아님).

| Figma 변수명             | CSS Property                        | 참조하는 Primitive   | 용도                                                |
| ------------------------ | ----------------------------------- | -------------------- | --------------------------------------------------- |
| Brand/Advisory           | `--color-brand-advisory`            | Teal/500             | 자문 업무 브랜드 색                                 |
| Brand/Contract           | `--color-brand-contract`            | Sky/600              | 계약 업무 브랜드 색                                 |
| Brand/Litigation         | `--color-brand-litigation`          | Yellow/500           | 소송 업무 브랜드 색                                 |
| Brand/Primary            | `--color-brand-primary`             | Blue/600             | 브랜드 메인                                         |
| Brand/Secondary          | `--color-brand-secondary`           | Blue/300             | 브랜드 보조                                         |
| Brand/Tertiary           | `--color-brand-tertiary`            | Yellow/400           | 브랜드 3차                                          |
| Surface/Border           | `--color-surface-border`            | Slate/300            | 표면 보더                                           |
| Surface/Container        | `--color-surface-container`         | White                | 컨테이너 배경                                       |
| Surface/Primary          | `--color-surface-primary`           | Slate/100            | 주요 배경                                           |
| Surface/Secondary        | `--color-surface-secondary`         | Slate/200            | 보조 배경                                           |
| Contents/Primary         | `--color-contents-primary`          | Gray/950             | 주요 텍스트                                         |
| Contents/Secondary       | `--color-contents-secondary`        | Gray/600             | 보조 텍스트                                         |
| Contents/Tertiary        | `--color-contents-tertiary`         | Gray/500             | 3차 텍스트                                          |
| Contents/Quaternary      | `--color-contents-quaternary`       | Gray/400             | 4차 텍스트(Tertiary보다 낮은 위계, 2026-09-28 추가) |
| Border/brand             | `--color-border-brand`              | Blue/600             | 브랜드 보더                                         |
| Border/danger            | `--color-border-danger`             | Red/500              | 위험 보더                                           |
| Border/default           | `--color-border-default`            | Gray/300             | 기본 보더                                           |
| Border/divider           | `--color-border-divider`            | Gray/200             | 구분선                                              |
| Border/strong            | `--color-border-strong`             | Gray/400             | 강조 보더                                           |
| State/Error              | `--color-state-error`               | Red/500              | 에러                                                |
| State/ErrorTransparent   | `--color-state-error-transparent`   | Red/500 (10% 알파)   | 에러 배경 (반투명)                                  |
| State/Info               | `--color-state-info`                | Sky/500              | 정보                                                |
| State/Inherit            | `--color-state-inherit`             | Gray/100             | 상속/비활성                                         |
| State/Success            | `--color-state-success`             | Green/600            | 성공                                                |
| State/SuccessTransparent | `--color-state-success-transparent` | Green/600 (10% 알파) | 성공 배경 (반투명)                                  |
| State/Warning            | `--color-state-warning`             | Orange/400           | 경고                                                |
| Chart/Grid               | `--color-chart-grid`                | Gray/200             | 차트 그리드선                                       |
| Chart/Label              | `--color-chart-label`               | Gray/600             | 차트 축 레이블                                      |
| Chart/Series-1           | `--color-chart-series-1`            | Sky/600              | 차트 시리즈 1                                       |
| Chart/Series-2           | `--color-chart-series-2`            | Teal/500             | 차트 시리즈 2                                       |
| Chart/Series-3           | `--color-chart-series-3`            | Yellow/400           | 차트 시리즈 3                                       |
| Chart/Series-4           | `--color-chart-series-4`            | Blue/800             | 차트 시리즈 4                                       |
| Chart/Series-5           | `--color-chart-series-5`            | Orange/400           | 차트 시리즈 5                                       |
| Chart/Value              | `--color-chart-value-text`          | Gray/950             | 차트 값 텍스트                                      |

> `State/ErrorTransparent`, `State/SuccessTransparent`는 Figma에서 alias + 알파(10%) 조합으로
> 만들어진 변형입니다. Style Dictionary의 참조 문법(`{a.b.c}`)은 알파 조정을 표현할 수 없어
> `tokens/colors.json`에는 계산된 rgba hex(`#ef44441a`, `#16a34a1a`)를 직접 값으로 넣었습니다.
>
> `Chart/Value`는 JSON 키 `value`가 Style Dictionary의 예약 키(토큰 leaf 판별용)와 충돌하여
> `value-text`로 치환했습니다 (`--color-chart-value-text`).

## 스페이싱 (18개, 4px 배수 스케일)

Figma "04 Spacing & Radius" 보드 원문 설명: "간격은 4px 배수 스케일 18단계". 이 페이지에는 스페이싱에 대한
별도 Semantic 레이어가 없고, 아래 숫자 스케일이 곧 Figma 변수입니다.

| Figma 변수명 | CSS Property    | 값    |
| ------------ | --------------- | ----- |
| Spacing/0    | `--spacing-0`   | 0px   |
| Spacing/4    | `--spacing-4`   | 4px   |
| Spacing/8    | `--spacing-8`   | 8px   |
| Spacing/12   | `--spacing-12`  | 12px  |
| Spacing/16   | `--spacing-16`  | 16px  |
| Spacing/20   | `--spacing-20`  | 20px  |
| Spacing/24   | `--spacing-24`  | 24px  |
| Spacing/28   | `--spacing-28`  | 28px  |
| Spacing/32   | `--spacing-32`  | 32px  |
| Spacing/36   | `--spacing-36`  | 36px  |
| Spacing/40   | `--spacing-40`  | 40px  |
| Spacing/44   | `--spacing-44`  | 44px  |
| Spacing/48   | `--spacing-48`  | 48px  |
| Spacing/52   | `--spacing-52`  | 52px  |
| Spacing/56   | `--spacing-56`  | 56px  |
| Spacing/60   | `--spacing-60`  | 60px  |
| Spacing/64   | `--spacing-64`  | 64px  |
| Spacing/128  | `--spacing-128` | 128px |

## 타이포그래피 (15개 텍스트 스타일)

Figma "03 Typography" 보드 (node-id 4272-2). font-family는 전부 "Apple SD Gothic Neo"이며
`get_variable_defs`로 값 재검증 완료 (사전 조사 데이터와 100% 일치).

Style Dictionary JSON에서는 `Heading/XXXXL` → `font.heading.xxxxl` 형태로 계층화했고,
각 스타일은 `family`/`size`/`weight`/`line-height`/`letter-spacing` 5개 속성으로 나뉘어
`--font-heading-xxxxl-size` 처럼 속성별 CSS 변수가 생성됩니다.

| Figma 변수명      | Weight         | Size (px) | Line height (px) | Letter spacing (px) | CSS Property 접두어          |
| ----------------- | -------------- | --------- | ---------------- | ------------------- | ---------------------------- |
| Heading/XXXXL     | Regular (400)  | 48.829    | 59               | -0.25               | `--font-heading-xxxxl-*`     |
| Heading/XXXL      | Regular (400)  | 39.063    | 47               | -0.25               | `--font-heading-xxxl-*`      |
| Heading/XXL       | Regular (400)  | 31.25     | 38               | -0.25               | `--font-heading-xxl-*`       |
| Heading/XL        | Regular (400)  | 25        | 30               | -0.25               | `--font-heading-xl-*`        |
| Heading/Large     | Bold (700)     | 20        | 24               | -0.25               | `--font-heading-large-*`     |
| Label/Large       | SemiBold (600) | 20        | 24               | 0                   | `--font-label-large-*`       |
| Label/Medium      | SemiBold (600) | 16        | 19               | 0                   | `--font-label-medium-*`      |
| Label/Small       | SemiBold (600) | 14        | 17               | 0                   | `--font-label-small-*`       |
| Label/BSmall      | Bold (700)     | 14        | 17               | 0                   | `--font-label-bsmall-*`      |
| Label/Xsmall      | SemiBold (600) | 12.8      | 15               | 0                   | `--font-label-xsmall-*`      |
| Paragraph/Large   | Regular (400)  | 20        | 30               | 0                   | `--font-paragraph-large-*`   |
| Paragraph/Medium  | Regular (400)  | 16        | 22               | 0                   | `--font-paragraph-medium-*`  |
| Paragraph/BMedium | SemiBold (600) | 16        | 22               | 0                   | `--font-paragraph-bmedium-*` |
| Paragraph/Small   | Regular (400)  | 14        | 18               | 0.25                | `--font-paragraph-small-*`   |
| Paragraph/Xsmall  | Regular (400)  | 12.8      | 19               | 0                   | `--font-paragraph-xsmall-*`  |

## Elevation (그림자, 8개)

Figma "05 Elevation" 보드 (node-id 4277-2), Effect Style 8개. `get_variable_defs`로 재검증한 결과
그림자 색은 전부 순수 black(`#000000`)이며 레이어별 불투명도만 다릅니다 (20% / 12% / 14%,
`elevation_basic`만 단일 레이어 15%). offsetX와 spread는 전부 0이라 표에서 생략했습니다.

이 프로젝트의 Style Dictionary 설정에는 composite shadow 타입/transform이 없으므로,
`tokens/elevation.json`에는 미리 계산한 최종 `box-shadow` 문자열을 값으로 직접 넣었습니다
(colors.json의 `state.error-transparent`와 동일한 패턴).

| Figma 변수명    | box-shadow (offsetY blur spread color)                                                                      | CSS Property        |
| --------------- | ----------------------------------------------------------------------------------------------------------- | ------------------- |
| elevation1      | `0px 1px 3px 0px rgba(0,0,0,0.20), 0px 2px 1px 0px rgba(0,0,0,0.12), 0px 1px 1px 0px rgba(0,0,0,0.14)`      | `--elevation-1`     |
| elevation3      | `0px 1px 8px 0px rgba(0,0,0,0.20), 0px 3px 3px 0px rgba(0,0,0,0.12), 0px 3px 4px 0px rgba(0,0,0,0.14)`      | `--elevation-3`     |
| elevation4      | `0px 2px 4px 0px rgba(0,0,0,0.20), 0px 1px 10px 0px rgba(0,0,0,0.12), 0px 4px 5px 0px rgba(0,0,0,0.14)`     | `--elevation-4`     |
| elevation8      | `0px 5px 5px 0px rgba(0,0,0,0.20), 0px 3px 14px 0px rgba(0,0,0,0.12), 0px 8px 10px 0px rgba(0,0,0,0.14)`    | `--elevation-8`     |
| elevation12     | `0px 7px 8px 0px rgba(0,0,0,0.20), 0px 5px 22px 0px rgba(0,0,0,0.12), 0px 12px 17px 0px rgba(0,0,0,0.14)`   | `--elevation-12`    |
| elevation16     | `0px 8px 10px 0px rgba(0,0,0,0.20), 0px 6px 30px 0px rgba(0,0,0,0.12), 0px 16px 24px 0px rgba(0,0,0,0.14)`  | `--elevation-16`    |
| elevation24     | `0px 11px 15px 0px rgba(0,0,0,0.20), 0px 9px 46px 0px rgba(0,0,0,0.12), 0px 24px 38px 0px rgba(0,0,0,0.14)` | `--elevation-24`    |
| elevation_basic | `0px 2px 8px 0px rgba(0,0,0,0.15)` (단일 레이어, standalone)                                                | `--elevation-basic` |

## Radius (모서리 반경, 7개) ⚠️ Figma 변수 미생성

Figma "04 Spacing & Radius" 보드 하단 (node-id 4273-156). 보드 원문: "현재 파일에는 40종의
반경 값이 혼재합니다. 아래는 사용 빈도를 근거로 좁힌 제안이며, 확정 후 변수 컬렉션 생성이
필요합니다" / "7 tokens · 제안 단계, **Figma 변수 미생성**". 즉 아직 실제 Figma 변수가 아니라
보드에 시각적으로 표기된 제안 숫자입니다 — `get_variable_defs`에도 잡히지 않으며, 스크린샷으로
직접 재확인했습니다. **실제 변수가 생성되면 이 파일의 값을 재검증하고 `comment` 필드를 갱신/삭제하세요.**

| Figma 변수명 | CSS Property    | 값     | 사용 빈도(보드 참고) |
| ------------ | --------------- | ------ | -------------------- |
| radius.none  | `--radius-none` | 0px    | —                    |
| radius.xs    | `--radius-xs`   | 4px    | 2,245건              |
| radius.sm    | `--radius-sm`   | 8px    | 578건                |
| radius.md    | `--radius-md`   | 16px   | 1,162건              |
| radius.lg    | `--radius-lg`   | 24px   | 498건                |
| radius.xl    | `--radius-xl`   | 48px   | 66건                 |
| radius.full  | `--radius-full` | 9999px | 1,459건 · pill/원형  |

## Gap (참고용, 새 CSS 토큰 없음)

Figma 내부 변수 컬렉션명은 "Gap"이지만, 값을 대조한 결과 이미 추출된 `--spacing-*` 18개
(위 "스페이싱" 섹션)와 완전히 동일합니다. 별도의 `--gap-*` 토큰은 만들지 않았습니다.
컴포넌트에서 gap 용도로 쓸 때도 `var(--spacing-*)`를 그대로 사용하세요.

## Claude용 규칙

1. Figma MCP가 hex 색상 반환 → 이 테이블에서 찾아서 `var(--color-*)` 사용
2. Figma가 스페이싱/Gap 숫자 반환 → `var(--spacing-*)` 매핑 (Gap 컬렉션도 동일 스케일 재사용)
3. Figma 텍스트 스타일 반환 → `var(--font-<카테고리>-<크기>-*)` 매핑 (예: `Label/Small` → `--font-label-small-size` 등)
4. Figma Effect Style(그림자) 반환 → `var(--elevation-*)` 매핑
5. Figma 모서리 반경 반환 → `var(--radius-*)` 매핑. 단, Radius는 아직 Figma 변수가 아니라
   보드 제안값이므로 사용 시 주석으로 "제안 단계" 임을 남길 것
6. 테이블에 없는 값 → 새 변수 만들지 말고 `/* ⚠️ 누락된 토큰 */` 플래그
7. 컴포넌트 구현에는 Primitive(`--color-primitive-*`)가 아니라 Semantic(`--color-brand-*`,
   `--color-surface-*`, `--color-contents-*`, `--color-border-*`, `--color-state-*`, `--color-chart-*`)를
   사용할 것 — Figma 원본 보드의 지침과 동일

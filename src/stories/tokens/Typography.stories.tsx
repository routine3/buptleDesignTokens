import { useEffect, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";
import "../../tokens/colors.css";
import "../../tokens/spacing.css";
import "../../tokens/typography.css";

/**
 * `src/tokens/typography.css`에 정의된 스타일 목록 (font-size/weight/line-height/letter-spacing 값은
 * 여기에 적지 않는다 — 각 행이 런타임에 getComputedStyle로 직접 읽어서 보여준다).
 *
 * 이 디자인 시스템은 Figma "03 Typography" 보드 기준 Heading / Label / Paragraph 3개 그룹으로
 * 구성돼 있다 (Display, Body라는 별도 그룹은 없음 — docs/design-tokens.md 참고).
 */
interface TypographyStyleDef {
  /** CSS 변수 접두사, 예: --font-heading-xxxxl */
  prefix: string;
  /** Figma 원본 표기, 예: XXXXL */
  label: string;
}

interface TypographyGroup {
  title: string;
  sampleText: string;
  styles: TypographyStyleDef[];
}

const GROUPS: TypographyGroup[] = [
  {
    title: "Heading",
    sampleText: "법틀 법무솔루션",
    styles: [
      { prefix: "--font-heading-xxxxl", label: "XXXXL" },
      { prefix: "--font-heading-xxxl", label: "XXXL" },
      { prefix: "--font-heading-xxl", label: "XXL" },
      { prefix: "--font-heading-xl", label: "XL" },
      { prefix: "--font-heading-large", label: "Large" },
    ],
  },
  {
    title: "Label",
    sampleText: "라벨 텍스트 예시",
    styles: [
      { prefix: "--font-label-large", label: "Large" },
      { prefix: "--font-label-medium", label: "Medium" },
      { prefix: "--font-label-small", label: "Small" },
      { prefix: "--font-label-bsmall", label: "BSmall" },
      { prefix: "--font-label-xsmall", label: "XSmall" },
    ],
  },
  {
    title: "Body (Paragraph)",
    sampleText:
      "실제 서비스 화면에 적용됐을 때의 본문 텍스트 예시입니다. 여러 줄로 이어지는 문단에서 행간과 자간이 어떻게 보이는지 확인할 수 있습니다.",
    styles: [
      { prefix: "--font-paragraph-large", label: "Large" },
      { prefix: "--font-paragraph-medium", label: "Medium" },
      { prefix: "--font-paragraph-bmedium", label: "BMedium" },
      { prefix: "--font-paragraph-small", label: "Small" },
      { prefix: "--font-paragraph-xsmall", label: "XSmall" },
    ],
  },
];

interface ResolvedTypographyValues {
  family: string;
  size: string;
  weight: string;
  lineHeight: string;
  letterSpacing: string;
}

function TypographyRow({
  groupKey,
  prefix,
  label,
  sampleText,
}: {
  groupKey: string;
  prefix: string;
  label: string;
  sampleText: string;
}) {
  const [values, setValues] = useState<ResolvedTypographyValues | null>(null);

  useEffect(() => {
    const rootStyles = getComputedStyle(document.documentElement);
    setValues({
      family: rootStyles.getPropertyValue(`${prefix}-family`).trim(),
      size: rootStyles.getPropertyValue(`${prefix}-size`).trim(),
      weight: rootStyles.getPropertyValue(`${prefix}-weight`).trim(),
      lineHeight: rootStyles.getPropertyValue(`${prefix}-line-height`).trim(),
      letterSpacing: rootStyles
        .getPropertyValue(`${prefix}-letter-spacing`)
        .trim(),
    });
  }, [prefix]);

  return (
    <div
      data-testid={`typography-${groupKey}-${label}`}
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "var(--spacing-24)",
        padding: "var(--spacing-16) 0",
        borderBottom: "1px solid var(--color-border-divider)",
      }}
    >
      <div style={{ flex: "1 1 420px", minWidth: 0 }}>
        <span
          style={{
            display: "block",
            fontFamily: "var(--font-label-xsmall-family)",
            fontSize: "var(--font-label-xsmall-size)",
            color: "var(--color-contents-tertiary)",
            marginBottom: "var(--spacing-4)",
          }}
        >
          {label}
        </span>
        <p
          style={{
            margin: 0,
            fontFamily: `var(${prefix}-family)`,
            fontSize: `var(${prefix}-size)`,
            fontWeight: `var(${prefix}-weight)`,
            lineHeight: `var(${prefix}-line-height)`,
            letterSpacing: `var(${prefix}-letter-spacing)`,
            color: "var(--color-contents-primary)",
          }}
        >
          {sampleText}
        </p>
      </div>
      <div
        style={{
          flex: "0 0 220px",
          fontFamily: "monospace",
          fontSize: "var(--font-label-xsmall-size)",
          color: "var(--color-contents-tertiary)",
          display: "flex",
          flexDirection: "column",
          gap: "var(--spacing-4)",
        }}
      >
        <code style={{ wordBreak: "break-all" }}>{prefix}-*</code>
        {values ? (
          <>
            <span>font-family: {values.family}</span>
            <span>font-size: {values.size}</span>
            <span>font-weight: {values.weight}</span>
            <span>line-height: {values.lineHeight}</span>
            <span>letter-spacing: {values.letterSpacing}</span>
          </>
        ) : (
          <span>…</span>
        )}
      </div>
    </div>
  );
}

function TypographyGroupSection({
  title,
  sampleText,
  styles,
}: TypographyGroup) {
  const groupKey = title.split(" ")[0].toLowerCase();
  return (
    <section style={{ marginBottom: "var(--spacing-32)" }}>
      <h2
        style={{
          fontFamily: "var(--font-heading-large-family)",
          fontSize: "var(--font-heading-large-size)",
          fontWeight: "var(--font-heading-large-weight)",
          color: "var(--color-contents-primary)",
          marginBottom: "var(--spacing-16)",
        }}
      >
        {title}
      </h2>
      <div>
        {styles.map((style) => (
          <TypographyRow
            key={style.prefix}
            groupKey={groupKey}
            prefix={style.prefix}
            label={style.label}
            sampleText={sampleText}
          />
        ))}
      </div>
    </section>
  );
}

function TypographyScale() {
  return (
    <div
      style={{
        fontFamily: "var(--font-paragraph-medium-family)",
        padding: "var(--spacing-24)",
      }}
    >
      {GROUPS.map((group) => (
        <TypographyGroupSection key={group.title} {...group} />
      ))}
    </div>
  );
}

const meta = {
  title: "Foundation/Typography",
  component: TypographyScale,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof TypographyScale>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllStyles: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const totalStyles = GROUPS.reduce((sum, g) => sum + g.styles.length, 0);
    const rows = canvas.getAllByTestId((id) => id.startsWith("typography-"));
    await expect(rows.length).toBe(totalStyles);
  },
};

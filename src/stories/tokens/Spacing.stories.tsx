import { useEffect, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";
import "../../tokens/colors.css";
import "../../tokens/spacing.css";
import "../../tokens/radius.css";
import "../../tokens/typography.css";

/**
 * `src/tokens/spacing.css`에 정의된 변수명 목록 (px 값은 여기에 적지 않는다 —
 * 각 행이 런타임에 getComputedStyle로 직접 읽어서 보여준다. 4px 배수 스케일 18단계).
 */
const SPACING_TOKENS = [
  "0",
  "4",
  "8",
  "12",
  "16",
  "20",
  "24",
  "28",
  "32",
  "36",
  "40",
  "44",
  "48",
  "52",
  "56",
  "60",
  "64",
  "128",
].map((n) => `--spacing-${n}`);

function SpacingRow({ cssVar }: { cssVar: string }) {
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue(
      getComputedStyle(document.documentElement)
        .getPropertyValue(cssVar)
        .trim(),
    );
  }, [cssVar]);

  const isZero = value === "0px";

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "var(--spacing-16)",
        padding: "var(--spacing-8) 0",
        borderBottom: "1px solid var(--color-border-divider)",
      }}
    >
      <code
        style={{
          width: "140px",
          flexShrink: 0,
          fontFamily: "monospace",
          fontSize: "var(--font-label-xsmall-size)",
          color: "var(--color-contents-primary)",
        }}
      >
        {cssVar}
      </code>
      <span
        style={{
          width: "56px",
          flexShrink: 0,
          fontSize: "var(--font-label-xsmall-size)",
          color: "var(--color-contents-tertiary)",
        }}
      >
        {value || "…"}
      </span>
      <div style={{ flex: "1 1 auto", display: "flex", alignItems: "center" }}>
        {isZero ? (
          <div
            role="img"
            aria-label={`${cssVar} spacing box (0)`}
            style={{
              width: "1px",
              height: "var(--spacing-24)",
              borderLeft: "2px dashed var(--color-border-strong)",
            }}
          />
        ) : (
          <div
            role="img"
            aria-label={`${cssVar} spacing box`}
            style={{
              width: `var(${cssVar})`,
              height: "var(--spacing-24)",
              background: "var(--color-brand-secondary)",
              borderRadius: "var(--radius-xs)",
            }}
          />
        )}
      </div>
    </div>
  );
}

function SpacingScale() {
  return (
    <div
      style={{
        fontFamily: "var(--font-paragraph-medium-family)",
        padding: "var(--spacing-24)",
      }}
    >
      <h2
        style={{
          fontFamily: "var(--font-heading-large-family)",
          fontSize: "var(--font-heading-large-size)",
          fontWeight: "var(--font-heading-large-weight)",
          color: "var(--color-contents-primary)",
          marginBottom: "var(--spacing-16)",
        }}
      >
        Spacing
      </h2>
      <div>
        {SPACING_TOKENS.map((cssVar) => (
          <SpacingRow key={cssVar} cssVar={cssVar} />
        ))}
      </div>
    </div>
  );
}

const meta = {
  title: "Foundation/Spacing",
  component: SpacingScale,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof SpacingScale>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllSpacing: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const boxes = canvas.getAllByRole("img");
    await expect(boxes.length).toBe(SPACING_TOKENS.length);
  },
};

import { useEffect, useRef, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";
import "../../tokens/colors.css";
import "../../tokens/spacing.css";
import "../../tokens/radius.css";
import "../../tokens/typography.css";

/**
 * `src/tokens/colors.css`에 정의된 CSS 변수 목록을 그대로 나열한 것.
 * 값(hex)은 여기에 적지 않는다 — 스와치가 런타임에 getComputedStyle로 직접 읽어서 보여준다.
 * (colors.css가 재생성돼도 이 파일을 다시 손댈 필요 없이 항상 최신 값을 반영함)
 */
interface ColorGroup {
  title: string;
  cssVars: string[];
}

const PRIMITIVE_GROUPS: ColorGroup[] = [
  { title: "White", cssVars: ["--color-primitive-white"] },
  {
    title: "Blue",
    cssVars: ["50", "200", "300", "600", "800"].map(
      (s) => `--color-primitive-blue-${s}`,
    ),
  },
  {
    title: "Sky",
    cssVars: ["50", "100", "200", "500", "600", "700"].map(
      (s) => `--color-primitive-sky-${s}`,
    ),
  },
  {
    title: "Teal",
    cssVars: ["500", "700"].map((s) => `--color-primitive-teal-${s}`),
  },
  { title: "Emerald", cssVars: ["--color-primitive-emerald-50"] },
  {
    title: "Green",
    cssVars: ["50", "100", "500", "600"].map(
      (s) => `--color-primitive-green-${s}`,
    ),
  },
  {
    title: "Yellow",
    cssVars: ["50", "100", "300", "400", "500"].map(
      (s) => `--color-primitive-yellow-${s}`,
    ),
  },
  { title: "Orange", cssVars: ["--color-primitive-orange-400"] },
  {
    title: "Red",
    cssVars: ["50", "300", "500"].map((s) => `--color-primitive-red-${s}`),
  },
  {
    title: "Gray",
    cssVars: ["50", "100", "200", "300", "400", "500", "600", "950"].map(
      (s) => `--color-primitive-gray-${s}`,
    ),
  },
  {
    title: "Slate",
    cssVars: ["100", "200", "300"].map((s) => `--color-primitive-slate-${s}`),
  },
  { title: "Zinc", cssVars: ["--color-primitive-zinc-300"] },
];

const SEMANTIC_GROUPS: ColorGroup[] = [
  {
    title: "Brand",
    cssVars: [
      "advisory",
      "contract",
      "litigation",
      "primary",
      "secondary",
      "tertiary",
    ].map((n) => `--color-brand-${n}`),
  },
  {
    title: "Surface",
    cssVars: ["border", "container", "primary", "secondary"].map(
      (n) => `--color-surface-${n}`,
    ),
  },
  {
    title: "Contents",
    cssVars: ["primary", "secondary", "tertiary"].map(
      (n) => `--color-contents-${n}`,
    ),
  },
  {
    title: "Border",
    cssVars: ["brand", "danger", "default", "divider", "strong"].map(
      (n) => `--color-border-${n}`,
    ),
  },
  {
    title: "State",
    cssVars: [
      "error",
      "error-transparent",
      "info",
      "inherit",
      "success",
      "success-transparent",
      "warning",
    ].map((n) => `--color-state-${n}`),
  },
  {
    title: "Chart",
    cssVars: [
      "grid",
      "label",
      "series-1",
      "series-2",
      "series-3",
      "series-4",
      "series-5",
      "value-text",
    ].map((n) => `--color-chart-${n}`),
  },
];

function ColorSwatch({ cssVar }: { cssVar: string }) {
  const swatchRef = useRef<HTMLDivElement>(null);
  const [declaredValue, setDeclaredValue] = useState("");
  const [resolvedValue, setResolvedValue] = useState("");

  useEffect(() => {
    const declared = getComputedStyle(document.documentElement)
      .getPropertyValue(cssVar)
      .trim();
    setDeclaredValue(declared);
    if (swatchRef.current) {
      setResolvedValue(getComputedStyle(swatchRef.current).backgroundColor);
    }
  }, [cssVar]);

  const isAlias = declaredValue.startsWith("var(");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--spacing-4)",
      }}
    >
      <div
        ref={swatchRef}
        role="img"
        aria-label={`${cssVar} color swatch`}
        style={{
          height: "var(--spacing-64)",
          borderRadius: "var(--radius-sm)",
          border: "1px solid var(--color-border-divider)",
          background: `var(${cssVar})`,
        }}
      />
      <code
        style={{
          fontFamily: "monospace",
          fontSize: "var(--font-label-xsmall-size)",
          color: "var(--color-contents-primary)",
          wordBreak: "break-all",
        }}
      >
        {cssVar}
      </code>
      <span
        style={{
          fontSize: "var(--font-label-xsmall-size)",
          color: "var(--color-contents-tertiary)",
        }}
      >
        {resolvedValue || "…"}
      </span>
      {isAlias && (
        <span
          style={{
            fontSize: "var(--font-label-xsmall-size)",
            color: "var(--color-contents-tertiary)",
          }}
        >
          → {declaredValue}
        </span>
      )}
    </div>
  );
}

function ColorGroupSection({ title, cssVars }: ColorGroup) {
  return (
    <section style={{ marginBottom: "var(--spacing-32)" }}>
      <h3
        style={{
          fontFamily: "var(--font-label-large-family)",
          fontSize: "var(--font-label-large-size)",
          fontWeight: "var(--font-label-large-weight)",
          color: "var(--color-contents-primary)",
          marginBottom: "var(--spacing-12)",
        }}
      >
        {title}
      </h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
          gap: "var(--spacing-16)",
        }}
      >
        {cssVars.map((cssVar) => (
          <ColorSwatch key={cssVar} cssVar={cssVar} />
        ))}
      </div>
    </section>
  );
}

function ColorPalette() {
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
        Primitive
      </h2>
      {PRIMITIVE_GROUPS.map((group) => (
        <ColorGroupSection key={group.title} {...group} />
      ))}

      <h2
        style={{
          fontFamily: "var(--font-heading-large-family)",
          fontSize: "var(--font-heading-large-size)",
          fontWeight: "var(--font-heading-large-weight)",
          color: "var(--color-contents-primary)",
          marginBottom: "var(--spacing-16)",
        }}
      >
        Semantic
      </h2>
      {SEMANTIC_GROUPS.map((group) => (
        <ColorGroupSection key={group.title} {...group} />
      ))}
    </div>
  );
}

const meta = {
  title: "Foundation/Colors",
  component: ColorPalette,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof ColorPalette>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllColors: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const swatches = canvas.getAllByRole("img");
    const totalTokens =
      PRIMITIVE_GROUPS.reduce((sum, g) => sum + g.cssVars.length, 0) +
      SEMANTIC_GROUPS.reduce((sum, g) => sum + g.cssVars.length, 0);
    await expect(swatches.length).toBe(totalTokens);
  },
};

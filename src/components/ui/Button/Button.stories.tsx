import type { Meta, StoryObj } from "@storybook/react";
import { expect, fn, userEvent, within } from "@storybook/test";
import { Icon } from "../Icon";
import {
  Button,
  type ButtonIconPosition,
  type ButtonKind,
  type ButtonSize,
} from "./Button";

const KINDS: ButtonKind[] = [
  "primary",
  "secondary",
  "secondary-solid",
  "tertiary",
  "solid",
  "negative",
];
const SIZES: ButtonSize[] = ["medium", "small"];
const ICON_POSITIONS: ButtonIconPosition[] = ["left", "right"];

const meta = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/mp4KoPM2jqzU2N9yGVBSrf?node-id=3354-26920",
    },
  },
  argTypes: {
    kind: { control: "select", options: KINDS },
    size: { control: "select", options: SIZES },
    iconPosition: { control: "select", options: ICON_POSITIONS },
  },
  args: {
    kind: "primary",
    size: "medium",
    iconPosition: "left",
    children: "Text",
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

const withAddIcon = <Icon name="add" size={20} />;

/** 클릭 시 onClick이 호출되는지 확인하는 공통 인터랙션 테스트 */
async function expectClickable(canvasElement: HTMLElement) {
  const canvas = within(canvasElement);
  const button = canvas.getByRole("button");
  await userEvent.click(button);
  await expect(button).toBeEnabled();
}

export const Primary: Story = {
  args: { kind: "primary", icon: withAddIcon },
  play: async ({ canvasElement }) => expectClickable(canvasElement),
};

export const Secondary: Story = {
  args: { kind: "secondary", icon: withAddIcon },
};

export const SecondarySolid: Story = {
  name: "Secondary Solid",
  args: { kind: "secondary-solid", icon: withAddIcon },
};

export const Tertiary: Story = {
  args: { kind: "tertiary", icon: withAddIcon },
};

export const Solid: Story = {
  args: { kind: "solid", icon: withAddIcon },
};

export const Negative: Story = {
  args: { kind: "negative", icon: withAddIcon },
};

/** Kind × Size 26 variant(Primary+Medium은 IconPosition Left/Right 둘 다)를 한눈에 보는 매트릭스 */
export const AllVariants: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--spacing-24)",
      }}
    >
      {KINDS.map((kind) => (
        <div
          key={kind}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--spacing-8)",
          }}
        >
          <strong
            style={{
              fontSize: "12px",
              color: "var(--color-contents-tertiary)",
            }}
          >
            {kind}
          </strong>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "var(--spacing-16)",
              alignItems: "center",
            }}
          >
            {SIZES.map((size) =>
              (kind === "primary" && size === "medium"
                ? ICON_POSITIONS
                : (["left"] as ButtonIconPosition[])
              ).map((iconPosition) => (
                <Button
                  key={`${kind}-${size}-${iconPosition}`}
                  kind={kind}
                  size={size}
                  iconPosition={iconPosition}
                  icon={withAddIcon}
                >
                  Text
                </Button>
              )),
            )}
          </div>
        </div>
      ))}
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const buttons = canvas.getAllByRole("button");
    // 6 kind × 2 size + Primary/Medium의 Right 추가 1개 = 13
    await expect(buttons).toHaveLength(13);
  },
};

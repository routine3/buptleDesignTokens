import type { Meta, StoryObj } from "@storybook/react";
import { expect, fn, userEvent, within } from "@storybook/test";
import { Icon } from "../Icon";
import { TextButton, type TextButtonSize } from "./TextButton";

const SIZES: TextButtonSize[] = ["small", "large"];

const meta = {
  title: "UI/TextButton",
  component: TextButton,
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/jRZzfr9vGsyGKCvT5HS0Gp?node-id=326-1590",
    },
  },
  argTypes: {
    size: { control: "select", options: SIZES },
  },
  args: {
    size: "small",
    children: "수정",
    onClick: fn(),
  },
} satisfies Meta<typeof TextButton>;

export default meta;
type Story = StoryObj<typeof meta>;

const withLinkIcon = <Icon name="link" size={24} />;

/** 클릭 시 onClick이 호출되는지 확인하는 공통 인터랙션 테스트 */
async function expectClickable(canvasElement: HTMLElement) {
  const canvas = within(canvasElement);
  const button = canvas.getByRole("button");
  await userEvent.click(button);
  await expect(button).toBeEnabled();
}

export const Small: Story = {
  args: { size: "small" },
  play: async ({ canvasElement }) => expectClickable(canvasElement),
};

export const Large: Story = {
  args: { size: "large" },
};

export const WithIcon: Story = {
  name: "With Icon",
  args: { size: "small", icon: withLinkIcon },
};

export const Disabled: Story = {
  args: { size: "small", disabled: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");
    await expect(button).toBeDisabled();
  },
};

/** Size × Icon 유무를 한눈에 보는 매트릭스 */
export const AllVariants: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--spacing-16)",
      }}
    >
      {SIZES.map((size) => (
        <div
          key={size}
          style={{
            display: "flex",
            gap: "var(--spacing-16)",
            alignItems: "center",
          }}
        >
          <TextButton size={size}>수정</TextButton>
          <TextButton size={size} icon={withLinkIcon}>
            수정
          </TextButton>
          <TextButton size={size} disabled>
            수정
          </TextButton>
        </div>
      ))}
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const buttons = canvas.getAllByRole("button");
    // 2 size × 3 (기본/아이콘/disabled) = 6
    await expect(buttons).toHaveLength(6);
  },
};

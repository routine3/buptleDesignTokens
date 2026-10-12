import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";
import { Icon, type IconName } from "./Icon";
import { ICONS } from "./icons";

const ALL_ICON_NAMES = [...Object.keys(ICONS), "send-beauty"] as IconName[];

const meta = {
  title: "UI/Icon",
  component: Icon,
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/mp4KoPM2jqzU2N9yGVBSrf?node-id=3353-27091",
    },
  },
  argTypes: {
    name: {
      control: "select",
      options: ALL_ICON_NAMES,
    },
    size: { control: { type: "number", min: 12, max: 96, step: 4 } },
  },
  args: {
    name: "delete",
    size: 24,
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

/** name prop을 select 컨트롤로 골라 단일 아이콘을 확인하는 스토리 */
export const Playground: Story = {
  args: {
    name: "search",
    size: 32,
    title: "검색",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const icon = canvas.getByRole("img", { name: "검색" });
    await expect(icon).toBeInTheDocument();
    await expect(icon).toHaveAttribute("width", "32");
    await expect(icon).toHaveAttribute("height", "32");
  },
};

/** Icon / Basic 44개 variant를 한 화면에서 전부 확인하는 스토리 */
export const Gallery: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(96px, 1fr))",
        gap: "var(--spacing-16)",
        color: "var(--color-contents-secondary)",
      }}
    >
      {ALL_ICON_NAMES.map((name) => (
        <div
          key={name}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "var(--spacing-4)",
            padding: "var(--spacing-8)",
            border: "1px solid var(--color-border-divider)",
            borderRadius: "var(--radius-sm)",
          }}
        >
          <Icon name={name} size={24} title={name} />
          <span
            style={{
              fontSize: "11px",
              wordBreak: "break-all",
              textAlign: "center",
            }}
          >
            {name}
          </span>
        </div>
      ))}
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const icons = canvas.getAllByRole("img");
    await expect(icons).toHaveLength(ALL_ICON_NAMES.length);
  },
};

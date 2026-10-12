import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { expect, userEvent, within } from "@storybook/test";
import { Segmented, type SegmentedOption } from "./Segmented";

const TWO_OPTIONS: SegmentedOption[] = [
  { value: "contract", label: "계약" },
  { value: "advisory", label: "자문" },
];

const THREE_OPTIONS: SegmentedOption[] = [
  { value: "contract", label: "계약" },
  { value: "advisory", label: "자문" },
  { value: "litigation", label: "소송" },
];

const meta = {
  title: "UI/Segmented",
  component: Segmented,
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/jRZzfr9vGsyGKCvT5HS0Gp?node-id=334-1585",
    },
  },
  args: {
    options: THREE_OPTIONS,
    value: "contract",
    onChange: () => {},
  },
} satisfies Meta<typeof Segmented>;

export default meta;
type Story = StoryObj<typeof meta>;

/** 컨트롤드 컴포넌트라 상태를 직접 들고 있는 래퍼로 렌더링 */
function ControlledSegmented(props: {
  options: SegmentedOption[];
  initialValue: string;
}) {
  const [value, setValue] = useState(props.initialValue);
  return (
    <Segmented options={props.options} value={value} onChange={setValue} />
  );
}

export const ThreeOptions: Story = {
  name: "3개 옵션",
  render: () => (
    <ControlledSegmented options={THREE_OPTIONS} initialValue="contract" />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const advisory = canvas.getByRole("radio", { name: "자문" });
    await userEvent.click(advisory);
    await expect(advisory).toHaveAttribute("aria-checked", "true");
  },
};

export const TwoOptions: Story = {
  name: "2개 옵션",
  render: () => (
    <ControlledSegmented options={TWO_OPTIONS} initialValue="contract" />
  ),
};

export const WithDisabledOption: Story = {
  name: "비활성 옵션 포함",
  render: () => (
    <ControlledSegmented
      options={[
        { value: "contract", label: "계약" },
        { value: "advisory", label: "자문" },
        { value: "litigation", label: "소송", disabled: true },
      ]}
      initialValue="contract"
    />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const litigation = canvas.getByRole("radio", { name: "소송" });
    await expect(litigation).toBeDisabled();
  },
};

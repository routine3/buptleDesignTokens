import type { Preview } from "@storybook/react";
import "../src/tokens/colors.css";
import "../src/tokens/spacing.css";
import "../src/tokens/typography.css";
import "../src/tokens/elevation.css";
import "../src/tokens/radius.css";

const preview: Preview = {
  tags: ["autodocs"],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

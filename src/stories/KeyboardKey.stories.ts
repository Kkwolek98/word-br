import type { Meta, StoryObj } from "@storybook/svelte";
import KeyboardKey from "../lib/KeyboardKey.svelte";

const meta = {
  title: "Keyboard/KeyboardKey",
  component: KeyboardKey,
  tags: ["keyboard", "key"],
} satisfies Meta<KeyboardKey>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

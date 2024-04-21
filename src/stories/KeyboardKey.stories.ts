import type { Meta, StoryObj } from "@storybook/svelte";
import KeyboardKey from "../lib/Keyboard/KeyboardKey.svelte";

const meta = {
  title: "Keyboard/KeyboardKey",
  component: KeyboardKey,
  tags: ["keyboard", "key"],
} satisfies Meta<KeyboardKey>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    key: "A",
    keyState: "default",
  },
};

export const CorrectPlacement: Story = {
  args: {
    key: "A",
    keyState: "correctPlacement",
  },
};

export const WrongPlacement: Story = {
  args: {
    key: "A",
    keyState: "wrongPlacement",
  },
};

export const DoesntOccur: Story = {
  args: {
    key: "A",
    keyState: "doesntOccur",
  },
};

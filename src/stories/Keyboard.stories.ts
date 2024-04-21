import type { Meta, StoryObj } from "@storybook/svelte";
import Keyboard from "../lib/Keyboard/Keyboard.svelte";

const meta = {
  title: "Keyboard/Keyboard",
  component: Keyboard,
  tags: ["keyboard"],
} satisfies Meta<Keyboard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = {
  args: {
    language: "en",
  },
};
export const Polish: Story = {
  args: {
    language: "pl",
  },
};

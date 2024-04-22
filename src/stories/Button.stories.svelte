<script lang="ts" context="module">
  import Button from "../lib/Button/Button.svelte";

  export const meta = {
    title: "Button/Button",
    component: Button,
  };
</script>

<script lang="ts">
  import { Story, Template } from "@storybook/addon-svelte-csf";
</script>

<Template let:args>
  {#if args.disabled}
    <Button variant="primary" disabled>Button</Button>
    <Button variant="secondary" disabled>Button</Button>
    <Button variant="tertiary" disabled>Button</Button>
  {:else}
    <Button {...args}>Button</Button>
  {/if}
</Template>

<Story name="Primary" args={{ variant: "primary" }} />
<Story name="Secondary" args={{ variant: "secondary" }} />
<Story name="Tertiary" args={{ variant: "tertiary" }} />
<Story name="Disabled" args={{ disabled: true }} />

<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import type { ButtonVariant } from "./types/types";

  export let variant: ButtonVariant = "primary";
  export let disabled: boolean = false;

  const dispatch = createEventDispatcher();

  function getButtonVariantClass(): string {
    switch (variant) {
      case "primary":
        return "bg-blue-500" + (!disabled ? " hover:bg-blue-700" : "");
      case "secondary":
        return "bg-gray-500" + (!disabled ? " hover:bg-gray-700" : "");
      case "tertiary":
        return "bg-red-500" + (!disabled ? " hover:bg-red-700" : "");
    }
  }

  function getDisabledClass(): string {
    if (disabled) {
      return "grayscale-[75%] shadow-none";
    } else {
      return "";
    }
  }

  function handleClick() {
    dispatch("click");
  }
</script>

<button
  {disabled}
  class={`${getButtonVariantClass()} text-white rounded-2xl px-3 py-2 shadow-md transition-colors ${getDisabledClass()}`}
  on:click={handleClick}>
  <slot></slot>
</button>

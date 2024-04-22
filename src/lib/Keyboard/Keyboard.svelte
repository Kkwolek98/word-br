<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import type { AvailableLanguage } from "../types/availableLanguages";
  import KeyboardKey from "./KeyboardKey.svelte";
  import { ALPHABET, type Alphabet } from "./alphabet";

  export let language: AvailableLanguage;

  const dispatch = createEventDispatcher();

  let alphabet: Alphabet;
  let alphabetRows: string[][] = [];

  alphabet = ALPHABET[language];

  alphabetRows.push(alphabet.base.substring(0, 10).split(""));
  alphabetRows.push(alphabet.base.substring(10, 19).split(""));
  alphabetRows.push(alphabet.base.substring(19, 26).split(""));

  if (alphabet.special.length) {
    alphabetRows.push(alphabet.special.split(""));
  }

  function getRowIndentationClass(rowIndex: number): string {
    if (rowIndex === 2) {
      return "ml-4";
    } else if (rowIndex === 1) {
      return "ml-2";
    } else {
      return "";
    }
  }

  function handleKeyClick(event: CustomEvent<string>) {
    dispatch("keyClick", event.detail);
  }
</script>

<div class="flex flex-col gap-2">
  {#each alphabetRows as row, index}
    <div class={`${getRowIndentationClass(index)} flex gap-1 items-center`}>
      {#each row as key}
        <KeyboardKey {key} keyState="default" on:keyClick={handleKeyClick} />
      {/each}
    </div>
  {/each}
</div>

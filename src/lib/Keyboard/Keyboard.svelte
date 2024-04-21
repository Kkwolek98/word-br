<script lang="ts">
  import type { AvailableLanguage } from "../types/availableLanguages";
  import KeyboardKey from "./KeyboardKey.svelte";
  import { ALPHABET, type Alphabet } from "./alphabet";

  export let language: AvailableLanguage;

  let alphabet: Alphabet;
  let alphabetRows: string[][] = [];

  alphabet = ALPHABET[language];

  if (alphabet.special.length) {
    alphabetRows.push(alphabet.special.split(""));
  }

  alphabetRows.push(alphabet.base.substring(0, 10).split(""));
  alphabetRows.push(alphabet.base.substring(10, 19).split(""));
  alphabetRows.push(alphabet.base.substring(19, 26).split(""));

  function getRowIndentationClass(rowIndex: number): string {
    const rows = alphabetRows.length;
    const rowIndexFromEnd = rows - rowIndex - 1;

    if (rowIndexFromEnd === 0) {
      return "ml-4";
    } else if (rowIndexFromEnd === 1) {
      return "ml-2";
    } else {
      return "";
    }
  }
</script>

<div class="flex flex-col gap-2">
  {#each alphabetRows as row, index}
    <div class={`${getRowIndentationClass(index)} flex gap-1 items-center`}>
      {#each row as key}
        <KeyboardKey {key} keyState="default" />
      {/each}
    </div>
  {/each}
</div>

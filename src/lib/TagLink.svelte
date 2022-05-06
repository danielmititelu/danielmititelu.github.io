<script lang="ts">
    import type { Tag } from "./types";
    export let tag: Tag;
    export let selected: boolean;
</script>

<div
    class:selected
    class="flex text-lg text-white mr-3 shadow rounded-lg text-center
           border-solid p-2 border-cyan-900 hover:text-blue-600 cursor-pointer"
    on:click
>
    <div>{tag.title}</div>
    <div class="ml-2">{tag.articles?.length ?? 0}</div>
</div>

<style>
    .selected {
        @apply bg-cyan-500
    }
</style>
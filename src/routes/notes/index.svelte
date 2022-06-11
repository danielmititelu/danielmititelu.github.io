<script lang="ts">
    import NotesGroup from "$lib/NotesGroup.svelte";
    import type { Notes } from "$lib/types";

    export let allNotes: Notes[];
</script>

<div class="flex flex-wrap">
    {#each allNotes as note}
        <NotesGroup notes={note} />
    {/each}
</div>

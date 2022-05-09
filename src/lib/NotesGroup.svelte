<script lang="ts">
    import NoteLink from "./NoteLink.svelte";
    import type { Notes } from "./types";
    
    export let notes: Notes;
</script>

<div class="md:w-3/6 w-full">
    <h3 class="mb-0">{notes.title}</h3>
    <div class="">
        {#each notes.articles as note}
            <NoteLink {note} />
        {/each}
    </div>
</div>

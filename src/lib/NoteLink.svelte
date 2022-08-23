<script lang="ts">
    import type { Note } from "./types";

    export let note: Note;
</script>

<a href={note.path} class="link block p-1 border-2 border-solid
 hover:border-sky-500 border-sky-500/0">
    - {note.title}
</a>

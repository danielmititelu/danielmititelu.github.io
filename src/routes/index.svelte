<script lang="ts">
    import NoteLink from "$lib/NoteLink.svelte";
    import type { PostsGroup } from "./index.json";

    export let postGroups: PostsGroup[];
</script>

<div>
    {#each postGroups as postGroup}
        <h1>{postGroup.title}</h1>
        <div class="flex items-center flex-wrap">
            {#each postGroup.posts as post}
                <NoteLink
                    href={post.path}
                    title={post.title}
                />
            {/each}
        </div>
        <div class="mt-20" />
    {/each}
</div>

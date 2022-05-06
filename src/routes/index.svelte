<script lang="ts">
    import ArticleLink from "$lib/ArticleLink.svelte";
    import TagLink from "$lib/TagLink.svelte";
    import type { Article, Tag } from "$lib/types";

    export let tags: Tag[];
    let selectedTag: Tag;
    let selectedArticles: Article[];
    $: selectedArticles = tags.filter(
        (tag) => tag.name === selectedTag?.name
    )[0]?.articles;

    function onTagClick(name: Tag) {
        selectedTag = name;
    }
</script>

<div>
    <h1>Tags</h1>
    <div class="flex">
        {#each tags as tag}
            <TagLink
                {tag}
                selected={selectedTag?.name == tag.name}
                on:click={() => onTagClick(tag)}
            />
        {/each}
    </div>
    {#if selectedTag && selectedArticles}
        <h2>{selectedTag.title}</h2>
        <div class="flex flex-wrap">
            {#each selectedArticles as article}
                <ArticleLink {article} />
            {/each}
        </div>
    {/if}
</div>

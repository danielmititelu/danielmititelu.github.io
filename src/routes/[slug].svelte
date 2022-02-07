<script context="module">
    export function load({ params }) {
        const { slug } = params;

        return {
            props: {
                slug
            }
        };
    }
</script>

<script>
    import DisjointSets from "$lib/posts/DisjointSets.svelte.md";
    import Heap from "$lib/posts/Heap.svelte.md";

    export let slug;
</script>

<section>
    {#if slug == "disjoint-sets"}
        <DisjointSets />
    {/if}
    {#if slug == "heap"}
        <Heap />
    {/if}
</section>

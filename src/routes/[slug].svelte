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
// @ts-nocheck

    import DisjointSets from "$lib/posts/DisjointSets.svelte.md";
    import Heap from "$lib/posts/Heap.svelte.md";
    import QuickSelect from "$lib/posts/QuickSelect.svelte.md";

    export let slug;
</script>

<section>
    {#if slug == "disjoint-sets"}
        <DisjointSets />
    {/if}
    {#if slug == "heap"}
        <Heap />
    {/if}
    {#if slug == "quick-select"}
        <QuickSelect />
    {/if}
</section>

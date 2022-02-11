<script>
    import NoteLink from "$lib/NoteLink.svelte";

    export let algorithms = [{ title: "Quickselect", path: "quick-select" }];

    export let dataStructures = [
        { title: "Heap", path: "heap" },
        { title: "Disjoint sets", path: "disjoint-sets" },
    ];
</script>

<div>
    <h1>Algorithms</h1>
    <div class="flex">
        {#each algorithms as algorithm}
            <NoteLink
                href={`/algorithms/${algorithm.path}`}
                title={algorithm.title}
            />
        {/each}
    </div>

    <div class="mt-20" />
    <h1>Data Structures</h1>
    <div class="flex">
        {#each dataStructures as dataStructure}
            <NoteLink
                href={`/data-structures/${dataStructure.path}`}
                title={dataStructure.title}
            />
        {/each}
    </div>
</div>

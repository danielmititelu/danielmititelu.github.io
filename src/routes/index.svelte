<script>
    export let blogs = [
        { title: 'Heap', path: 'heap' },
        { title: 'Disjoint sets', path: 'disjoint-sets'}
    ]
</script>

<div>
    <h1>Algorithms</h1>
    {#each blogs as blog}
        <a href={blog.path} class=" no-underline text-black hover:text-blue-600">
            <h2>{blog.title}</h2> 
        </a>
    {/each }
</div>

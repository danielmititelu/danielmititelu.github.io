<!-- <script lang="ts">
    TODO: imporve navigation
    import { page } from "$app/stores";

    var paths = $page.url.pathname.split("/");
</script> -->

<div class="top-0 w-full bg-slate-800 left-0 right-0">
    <div
        class="flex max-w-screen-md m-auto 
        justify-start h-16 text-xl gap-2"
    >
        <a class="my-auto link" href="/">Home </a>
        <a class="my-auto link" href="/notes">Notes </a>
    </div>
<!-- 
    <div class="text-sm breadcrumbs">
        <ul>
            <li><a href="/">Home</a></li>
            {#each paths as path}
                <li><a href={`/${path}`}>{path}</a></li>
            {/each}
            <li>Add Document</li>
        </ul>
    </div>
    <p>Current URL: {$page.url.pathname}</p> -->
</div>

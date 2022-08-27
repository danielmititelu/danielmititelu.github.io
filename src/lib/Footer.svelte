<script>
    import SvelteIcon from "./Icons/SvelteIcon.svelte";
    import GithubIcon from "./Icons/GithubIcon.svelte";
</script>

<footer class="mx-auto mt-auto mb-3">
    <div class="sm:flex items-center text-white mx-auto">
        <div class="flex items-center">
            Created with
            <a class="mx-1 flex items-center link" href="https://svelte.dev/">
                <SvelteIcon /> Svelte,
            </a>
        </div>
        <div class="flex items-center">
            hosted on
            <a
                class="mx-1 flex items-center link"
                href="https://github.com/danielmititelu/danielmititelu.github.io"
            >
                <GithubIcon />
                <div class="w-1" />
                Github
            </a>
        </div>
    </div>
</footer>

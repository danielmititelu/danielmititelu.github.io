<script lang="ts">
    import type { Article } from "./types";
    export let article: Article;
</script>

<a href={article.path} class="text-2xl my-auto">
    <div
        class="mr-3 mb-3 shadow rounded-lg text-center
               border-solid p-3 border-cyan-900"
    >
        {article.title}
    </div>
</a>

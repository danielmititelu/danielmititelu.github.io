---
title: Svelte cheat sheet
tags:
- cheat-sheet
---

# Svelte cheat sheet
```svelte
<script lang="ts">
    export let componentProp;
    
    export { className as class };
    let className = "";

    let x = 7;
    let array = [1, 2, 3, 4];
</script>

<div class:disabled 
     class="{className ? className : ''}">
    <div>Component property: {componentProp}</div>

    <!-- component children -->
    <slot />
    
    {#if x > 10}
        <p>{x} is greater than 10</p>
    {:else if x < 5>}
        <p>{x} is less than 5</p>
    {:else}
        <p>{x} is between 5 and 10</p>
    {/if}

    {#each array as elem}
        <div>{elem}</div>
    {/each}
</div>

<style>
    .disabled {
        cursor: not-allowed;
    }
</style>
```
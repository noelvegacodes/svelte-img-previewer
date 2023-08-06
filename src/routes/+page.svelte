<script lang="ts">
    import { createImagePreviewer } from '../lib/index.js'
    const { src, imagePreviewer} = createImagePreviewer()
</script>

<div>
    {#if $src}
        <img src={$src} alt="Preview Frame" />
    {/if}
</div>

<input type="file" use:imagePreviewer />

<style>
    div {
        height: 100px;
        width: 100px;
        border: 2px solid black;
    }

    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
</style>
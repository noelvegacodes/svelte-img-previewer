<script>
    import { createImagePreviewer } from '../lib/index.js';

    // sample image, this can be an image you pull from a user object for example
    const avatar = 'https://avatars.githubusercontent.com/u/130720776?v=4'
    const { src, trigger, imagePreviewer } = createImagePreviewer(avatar);
</script>

<div>
    {#if $src}
        <img src={$src} alt="user avatar" />
    {/if}
</div>

<button use:trigger>
    Upload Image
</button>
<input id="avatar" hidden type="file" accept="image/*" use:imagePreviewer />

<style>
    div {
        height: 100px;
        width: 100px;
        border: 2px solid black;
        margin-block-end: 10px;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
</style>
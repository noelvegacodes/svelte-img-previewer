# About

`svelte-img-previewer` is a tool for displaying images from input file types in svelte.

`<input type="file" target="images/*" />`

# Getting Started

`npm install svelte-img-previewer`

Import and invoke the `createImagePreviewer()` builder.

The builder will create and return an object which contains a store and an action which you attach to an input file type.

- store: `src` : current image source state

- action: `trigger` : invokes a click event on the input `imagePreviewer` is being used

- action: `imagePreviewer` : updates the state of the `src` store on `input` event

You can optionally pass an initial state when calling the `createImagePreviewer` builder.

If you dont have an initial state to pass the `createImagePreviewer` the `src` store will have a null value. In this case you should conditionally render your image component / element.

# Usage

```javascript
<script>
    import { createImagePreviewer } from 'svelte-img-previewer';


    // sample image, this can be an image you pull from a user object for example
    const avatar = 'https://avatars.githubusercontent.com/u/130720776?v=4'
    const { src, trigger, imagePreviewer } = createImagePreviewer(avatar);
</script>

<div>
    {#if $src}
        <img src={$src} alt="user avatar" />
    {/if}
</div>

<button use:trigger> Upload Image </button>
<input name="avatar" hidden type="file" accept="image/*" use:imagePreviewer />

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
```

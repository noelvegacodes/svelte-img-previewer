# Usage

```javascript
<script>
    import { createImagePreviewer } from 'svelte-img-previewer';

    export let data;
    const { src, imagePreviewer } = createImagePreviewer(data?.avatar);
</script>

<div>
    <img src={$src} alt="user avatar" />
</div>

<input type="file" accept="image/*" use:imagePreviewer />
```
"# svelte-img-previewer" 

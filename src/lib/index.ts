// Reexport your entry components here
import { writable } from 'svelte/store';

export function createImagePreviewer(initialSrc: string | null = null) {
	const src = writable(initialSrc);

	const imagePreviewer = (node: HTMLInputElement) => {
		function updateSrc() {
			if (!node.files) return;
			const file = node.files[0];

			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = function () {
				if (!reader.result) return;
				if (typeof reader.result !== 'string') throw new Error('reader result is not a string');
				src.set(reader.result);
			};
		}

		node.addEventListener('input', updateSrc);

		return {
			destroy: () => {
				node.removeEventListener('input', updateSrc);
			}
		};
	};

	return { src, imagePreviewer };
}

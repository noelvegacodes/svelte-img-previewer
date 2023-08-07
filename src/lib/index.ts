// Reexport your entry components here
import { writable } from 'svelte/store';

export function createImagePreviewer(initialSrc: string | null = null) {
	const src = writable(initialSrc);
	let input: HTMLInputElement;
	const imagePreviewer = (node: HTMLInputElement) => {
		if (node.type !== 'file') {
			throw new Error('input must be of type file');
		}
		input = node;
		function updateSrc() {
			if (!node.files) return;

			if (node.files.length > 1) {
				throw new Error('Image Previewer only supports 1 image selection at this moment');
			}

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

	const trigger = (node: HTMLInputElement) => {
		function handleInputClick() {
			input.click();
		}
		node.addEventListener('click', handleInputClick);

		return {
			destroy: () => {
				node.removeEventListener('click', handleInputClick);
			}
		};
	};

	return { src, trigger, imagePreviewer };
}

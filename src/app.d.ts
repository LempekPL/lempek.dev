import {ALL_THEMES} from "$lib/themes.ts";

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
	export type Theme = typeof ALL_THEMES[number];
}

export {};

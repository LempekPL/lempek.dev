import {writable} from "svelte/store";
import {browser} from "$app/environment";

const storeTheme = writable<Theme>(browser ? (localStorage.getItem("theme") as Theme ?? "system") : "system");
storeTheme.subscribe(value => browser && localStorage.setItem("theme", value));
export default storeTheme;
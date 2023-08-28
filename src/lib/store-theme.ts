import {writable} from "svelte/store";
import {browser} from "$app/environment";

const storeTheme = writable(browser ? (localStorage.getItem("theme") ?? "dark") : "dark");
storeTheme.subscribe(value => browser && localStorage.setItem("theme", value));
export default storeTheme;
import type { Handle } from '@sveltejs/kit'
import { locale } from 'svelte-i18n'

export const handle: Handle = async ({ event, resolve }) => {
    const lang = event.cookies.get("LANG") ?? event.request.headers.get('accept-language')?.split(',')[0];
    if (lang) {
        locale.set(lang)
    }
    return resolve(event)
}
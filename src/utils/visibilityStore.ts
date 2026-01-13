import { writable } from 'svelte/store';
import type { COMPONENT_ID } from '../constants/constants';

export const visibilityStore = writable<Record<typeof COMPONENT_ID[number], boolean>>(
	{
		about: false,
		experience: false,
		projects: false
	}
);

import type { COMPONENT_ID } from '../constants/constants';
import { visibilityStore } from './visibilityStore';

export function inView(
	node: HTMLElement,
	key: (typeof COMPONENT_ID)[number],
	options?: IntersectionObserverInit
) {
	const observer = new IntersectionObserver(([entry]) => {
		visibilityStore.update((state) => ({
			...state,
			[key]: entry.isIntersecting
		}));
	}, options);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}

import '@/shared/styles/index.scss';
import { Router } from '@/widgets/router/Router.ts';

document.addEventListener('DOMContentLoaded', () =>{
	const root = document.querySelector('#app');

	if (root) {
		Router(root);
	}
});

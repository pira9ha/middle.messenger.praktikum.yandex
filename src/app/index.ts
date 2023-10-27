import {Router} from "@/widgets/router/Router.ts";
import '@/shared/styles/index.scss';

document.addEventListener('DOMContentLoaded', () =>{
	const root = document.querySelector('#app');

	if (root) {
		Router(root);
	}
});
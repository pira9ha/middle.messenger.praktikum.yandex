import Handlebars from 'handlebars';
import '../lib/utils/registerPartials.ts';
import mainPage from './mainPage.template';
import {Link} from "@/shared/ui/link/Link";
import {context} from "@/pages/main-page/lib/context/context.ts";

Handlebars.registerPartial({
	link: Link,
})

export const MainPage = () => {
	const template = Handlebars.compile(mainPage);
	return template({ pages: context });
};

import {MainPage} from "@/pages/main-page";
import {LoginPage} from "@/pages/login-page";

export const Router = (rootElement: Element) => {
    const currentPath = window.location.pathname;
    const pages: Record<string, () => string> = {
        '/': MainPage,
        '/login': LoginPage,
    };
    console.log(window.location.pathname)

    rootElement.innerHTML = pages[currentPath]();

    // const onRouterClickEvent = (e: Event) => {
    //     debugger
    //     const element = e.target;
    //     // debugger
    //
    //     if (element instanceof Element) {
    //         const attributeName = element.getAttribute('data-path') ?? '';
    //         const elementKey = `${attributeName}`.split('/');
    //         const item = pages[elementKey[1] as keyof TPage];
    //         if (item) {
    //             rootElement.innerHTML = item.component();
    //         }
    //     }
    // };
    //
    // const pageLinks = document.querySelectorAll(`.${pageSelector}`);
    // pageLinks.forEach((link) => {
    //     link.addEventListener('onclick', onRouterClickEvent);
    // });
};

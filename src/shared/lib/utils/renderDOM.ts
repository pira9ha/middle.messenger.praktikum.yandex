import Component from '../component/Component.ts';

export const render = (query: string, block: Component) => {
  const root = document.querySelector(query);
  const elementContent = block.getContent();

  if (root && elementContent instanceof HTMLElement) {
    root.textContent = elementContent.innerHTML;
    return root;
  }
};

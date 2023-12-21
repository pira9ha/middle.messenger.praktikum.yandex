import { JSDOM } from 'jsdom';

const { window } = new JSDOM('<div id="app"></div>', {
  url: 'http://localhost:3000',
});

global.window = window;
global.document = window.document;
global.HTMLElement = window.HTMLElement;
global.DocumentFragment = window.DocumentFragment;

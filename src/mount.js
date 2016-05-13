import { createElement } from './element';

export function mount(vTree, target) {
  const element = createElement(vTree);
  target.innerHTML = element.outerHTML;
}

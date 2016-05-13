import isObject from 'is-object';

export function createElement(obj) {
  const element = document.createElement(obj.tagName);
  if (isObject(obj.attributes)) {
    Object.keys(obj.attributes).forEach(key => {
      element.setAttribute(key, obj.attributes[key]);
    });
  }
  obj.children
    .filter(isObject)
    .map(createElement)
    .forEach(c => element.appendChild(c));
  obj.children
    .filter(isString)
    .forEach(c => {
      element.innerHTML += c;
    });
  return element;
}

function isString(item) {
  return typeof item === 'string';
}

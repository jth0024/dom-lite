import isArray from 'is-array';
import isObject from 'is-object';

export function h(tagName, attributes = {}, children = []) {
  if (typeof tagName === 'undefined') {
    throw new Error('Must supply a tag name!');
  }
  return {
    attributes: validateAttributes(attributes, children),
    children: validateChildren(attributes, children),
    tagName: validateTagName(tagName),
  };
}

function validateAttributes(attributes) {
  if (isObject(attributes) && !isArray(attributes)) {
    return attributes;
  }
  return {};
}

function validateChildren(attributes, children) {
  if (isArray(attributes)) {
    return attributes;
  }
  if (isArray(children)) {
    return children;
  }
  return [];
}

function validateTagName(tagName) {
  if (typeof tagName !== 'string') {
    throw new Error('Tag name must be a string');
  }
  return tagName.toUpperCase();
}

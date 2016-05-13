
import { checkElementsEqual } from './test-utilities';
import { createElement } from '../src';

describe('createElement', () => {
  it('handles an element', () => {
    const vTree = {
      tagName: 'DIV',
      children: [],
    };
    const actualElement = createElement(vTree);
    const expectedElement = document.createElement('DIV');
    checkElementsEqual(actualElement, expectedElement);
  });
  it('handles an element with a text child', () => {
    const vTree = {
      tagName: 'DIV',
      children: [
        'Some text',
      ],
    };
    const actualElement = createElement(vTree);
    const expectedElement = document.createElement('DIV');
    expectedElement.innerHTML = 'Some text';
    checkElementsEqual(actualElement, expectedElement);
  });
  it('handles an element with attributes', () => {
    const vTree = {
      tagName: 'DIV',
      children: [],
      attributes: {
        custom: '4',
      },
    };
    const actualElement = createElement(vTree);
    const expectedElement = document.createElement('DIV');
    expectedElement.setAttribute('custom', '4');
    checkElementsEqual(actualElement, expectedElement);
  });
  it('handles an element with attributes and a text child', () => {
    const vTree = {
      tagName: 'DIV',
      children: [
        'Some text',
      ],
      attributes: {
        custom: '4',
      },
    };
    const actualElement = createElement(vTree);
    const expectedElement = document.createElement('DIV');
    expectedElement.setAttribute('custom', '4');
    expectedElement.innerHTML = 'Some text';
    checkElementsEqual(actualElement, expectedElement);
  });
});

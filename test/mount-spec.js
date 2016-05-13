import { checkElementsEqual } from './test-utilities';
import { mount } from '../src';

describe('mount', () => {
  it('places an element in the target', () => {
    const vTree = {
      tagName: 'DIV',
      attributes: {
        id: 'actualElement',
      },
      children: [],
    };
    const expectedElement = document.createElement('DIV');
    expectedElement.setAttribute('id', 'actualElement');
    mount(vTree, document.body);
    const actualElement = document.getElementById('actualElement');
    checkElementsEqual(actualElement, expectedElement);
  });
});

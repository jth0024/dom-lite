import { expect } from 'chai';

export function checkElementsEqual(element1, element2) {
  expect(element1.outerHTML).to.equal(element2.outerHTML);
  expect(element1.innerHTML).to.equal(element2.innerHTML);
}

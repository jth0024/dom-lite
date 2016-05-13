import { expect } from 'chai';
import { h } from '../src';

describe('h', () => {
  it('handles a tagName', () => {
    const expectedTree = {
      attributes: {},
      children: [],
      tagName: 'DIV',
    };
    const actualTree = h('DIV');
    expect(expectedTree).to.eql(actualTree);
  });
  it('handles a lowercase tagName', () => {
    const expectedTree = {
      attributes: {},
      children: [],
      tagName: 'DIV',
    };
    const actualTree = h('div');
    expect(expectedTree).to.eql(actualTree);
  });
  it('handles a tagName and attributes', () => {
    const expectedTree = {
      tagName: 'DIV',
      attributes: {
        customAttribute: 'custom',
      },
      children: [],
    };
    const actualTree = h('DIV', { customAttribute: 'custom' });
    expect(expectedTree).to.eql(actualTree);
  });
  it('handles a tagName and children', () => {
    const expectedTree = {
      tagName: 'DIV',
      attributes: {},
      children: [
        'some text',
      ],
    };
    const actualTree = h('DIV', [
      'some text',
    ]);
    expect(expectedTree).to.eql(actualTree);
  });
  it('handles a tagName, attributes, and children', () => {
    const expectedTree = {
      attributes: {
        customAttribute: 'custom',
      },
      children: [
        'some text',
      ],
      tagName: 'DIV',
    };
    const actualTree = h('DIV', {
      customAttribute: 'custom',
    }, [
      'some text',
    ]);
    expect(expectedTree).to.eql(actualTree);
  });
});

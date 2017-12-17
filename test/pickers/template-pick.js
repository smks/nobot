

const mock = require('mock-require');

mock('fs', {
  readdirSync: path => ['.git', 'a', 'b', 'c'],
  statSync: path => ({
    isDirectory() {
      return true;
    },
    isFile() {
      return true;
    },
  }),
});
const assert = require('chai').assert;
const expect = require('chai').expect;
const TemplatePick = require('../../src/pickers/template-pick');

let templatePick;

describe('Picker - TemplatePick', () => {
  beforeEach(() => {
    templatePick = new TemplatePick();
  });

  after(() => {
    mock.stop('fs');
  });

  it('the path to promo templates is correct', () => {
    const expected = '../libraries/gamesys-design/promo-templates';
    const path = templatePick.getPath();
    assert.equal(expected, path);
  });

  it('returns a list of directories', () => {
    const expected = ['a', 'b', 'c'];
    const actual = templatePick.findTemplates();
    assert.deepEqual(actual, expected);
  });

  it('returns my chosen template', () => {
    const choice = 'b';
    const expected = choice;
    let actual;
    templatePick.setChosenTemplate(choice);
    actual = templatePick.getChosenTemplate();
    assert.equal(actual, expected);
  });

  it('set a template and not override it (immutable)', () => {
    const choice = 'b';
    const expected = choice;
    let actual;
    templatePick.setChosenTemplate(choice);
    templatePick.setChosenTemplate('d');
    templatePick.setChosenTemplate('e');
    actual = templatePick.getChosenTemplate();
    assert.equal(actual, expected);
  });

  it('error if template does not exist', () => {
    const choice = 'z';
    expect(templatePick.setChosenTemplate.bind(templatePick, choice))
      .to.throw(`${choice} does not exist in available templates`);
  });
});

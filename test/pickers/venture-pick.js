

const assert = require('chai').assert;
const expect = require('chai').expect;
const VenturePick = require('../../src/pickers/venture-pick');
const VENTURES = require('../../config/ventures');

const venturesToCheckFor = [
  VENTURES.BETHOTSHOT,
  VENTURES.BOTEMANIA,
  VENTURES.HEART,
  VENTURES.JACKPOTJOY,
  VENTURES.MONOPOLY_CASINO,
  VENTURES.STARSPINS,
  VENTURES.JACKPOTJOY_SWEDEN,
  VENTURES.VIRGINGAMES,
];

const venturePick = new VenturePick();

describe('Picker - VenturePick', () => {
  it('ventures property should be an array', () => {
    const ventures = venturePick.getVentures();
    assert(Array.isArray(ventures));
  });

  it('ventures property should have all ventures', () => {
    const ventures = venturePick.getVentures();
    venturesToCheckFor.forEach((venture) => {
      assert((ventures.indexOf(venture) !== -1), `${venture} is missing from array`);
    });
  });

  it('set venture chosen to throw error if does not exist', () => {
    expect(venturePick.setChosenVenture.bind(venturePick, 'my-venture')).to.throw('my-venture does not exist in available ventures');
  });

  it('set venture should let me get venture pick', () => {
    const input = VENTURES.MONOPOLY_CASINO;
    const expected = input;

    venturePick.setChosenVenture(input);
    const actual = venturePick.getChosenVenture();

    assert(expected === actual);
  });

  it('venture should always remain as the first venture chosen (immutable)', () => {
    const input = VENTURES.MONOPOLY_CASINO;
    const expected = input;

    venturePick.setChosenVenture(input);
    venturePick.setChosenVenture(VENTURES.JACKPOTJOY_SWEDEN);
    venturePick.setChosenVenture(VENTURES.STARSPINS);

    const actual = venturePick.getChosenVenture();

    assert(expected === actual);
  });
});

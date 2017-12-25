const assert = require('chai').assert;
const expect = require('chai').expect;
const PromoId = require('../../src/vo/promo-id');

let promoId;

describe('Inputs - PromoID', () => {
  beforeEach(() => {
    promoId = new PromoId();
  });

  it('can set promo ticket', () => {
    const id = '22333';
    promoId.set(id);
    assert.equal(promoId.get(), id);
  });

  it('can set promo ticket only once (immutable)', () => {
    const ticket = '123';
    promoId.set(ticket);
    promoId.set('234');
    promoId.set('567');
    promoId.set('891');
    assert.equal(promoId.get(), ticket);
  });

  it('errors if not a number', () => {
    const ticket = 'ticket';
    expect(promoId.set.bind(promoId, ticket))
      .to.throw(`${ticket} should be numeric`);
  });
});

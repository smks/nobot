

class PromoID {
  constructor() {
    this.ticket = null;
  }

  set(id) {
    if (this.ticket !== null) {
      return;
    }

    if (this.isValid(id) === false) {
      throw new Error(`${id} should be numeric`);
    }

    this.ticket = id;
  }

  isValid(ticket) {
    return RegExp(/^\d+$/).test(ticket);
  }

  get() {
    return this.ticket;
  }
}

module.exports = PromoID;

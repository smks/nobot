

class JiraTicket {
  constructor() {
    this.ticket = null;
  }

  set(ticket) {
    if (this.ticket !== null) {
      return;
    }

    if (this.isValid(ticket) === false) {
      throw new Error(`${ticket} is not valid, example: 'MDD-123'`);
    }

    this.ticket = ticket;
  }

  isValid(ticket) {
    return RegExp(/^MDD-\d+$/).test(ticket);
  }

  get() {
    return this.ticket;
  }
}

module.exports = JiraTicket;

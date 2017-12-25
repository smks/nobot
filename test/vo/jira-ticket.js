const assert = require('chai').assert;
const expect = require('chai').expect;
const JiraTicket = require('../../src/vo/jira-ticket');

let jiraTicket;

describe('Inputs - JiraTicket', () => {
  beforeEach(() => {
    jiraTicket = new JiraTicket();
  });

  it('can set jira ticket', () => {
    const ticket = 'MDD-12333';
    jiraTicket.set(ticket);
    assert.equal(jiraTicket.get(), ticket);
  });

  it('can set jira ticket only once (immutable)', () => {
    const ticket = 'MDD-12333';
    jiraTicket.set(ticket);
    jiraTicket.set('MDD-111');
    jiraTicket.set('MDD-222');
    jiraTicket.set('MDD-333');
    assert.equal(jiraTicket.get(), ticket);
  });

  it('errors if wrong prefix format', () => {
    const ticket = 'MD-12333';
    expect(jiraTicket.set.bind(jiraTicket, ticket))
      .to.throw(`${ticket} is not valid, example: 'MDD-123'`);
  });

  it('errors if does not use numbers suffix', () => {
    const ticket = 'MDD-12ed';
    expect(jiraTicket.set.bind(jiraTicket, ticket))
      .to.throw(`${ticket} is not valid, example: 'MDD-123'`);
  });
});

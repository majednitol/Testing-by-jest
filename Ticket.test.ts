import { Ticket } from './Ticket';

describe('Ticket', () => {
  let ticket: Ticket;

  beforeEach(() => {
    ticket = new Ticket();
    
  });

  it('should not allow buying tickets if not logged in', function () {
    ticket.createAccount('test1@example.com', 'password','tamim');
    ticket.login('test@example.com', 'password');
   ticket.buyTicket(ticket.getTicketInfo().buyerName, 10, 100); 
    });

  it('should buy tickets successful when logged in with sufficient total tickets', function () {
    ticket.createAccount('test2@example.com', 'password','akash');
    ticket.login('test2@example.com', 'password'); 
    ticket.buyTicket(ticket.getTicketInfo().buyerName, 40, 10);
    expect(ticket.getTicketInfo().buyerName).toBe('akash'); 
    expect(ticket.getTicketInfo().numberOfTicket).toBe(40); 
   
    expect(ticket.getTicketInfo().luggageWeight).toBe(400); 
    
  });
  it('should buy tickets unsuccessful when logged in with insufficient total tickets', function () {
    ticket.createAccount('test3@example.com', 'password','jamal');
    ticket.login('test3@example.com', 'password'); 
    ticket.buyTicket(ticket.getTicketInfo().buyerName, 60, 10);
  });
});

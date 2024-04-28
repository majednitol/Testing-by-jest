export class Ticket {
  private buyerName: string;
  private _numberOfTicket: number;
  private _price: number;
  private _perTicketPrice: number;
  private _luggageWeight: number;
  private _totalTicket: number;
  private _password: string;
  private email: string;
  private _IsLogin: boolean;

  constructor() {
    this._numberOfTicket = 0;
    this._price = 0;
    this._perTicketPrice = 50;
    this._luggageWeight = 0;
    this._totalTicket = 50;
    this._IsLogin = false;
  }

  getTicketInfo(): { buyerName: string, numberOfTicket: number, price: number, luggageWeight: number } {
    return {
      buyerName: this.buyerName,
      numberOfTicket: this._numberOfTicket,
      price: this._price,
      luggageWeight: this._luggageWeight
    };
  }

  buyTicket(buyerName: string, numberOfTicket: number, carringWeight: number): void {
    let discount = ((this._perTicketPrice * numberOfTicket) * 3)/100
    if (this._IsLogin) {
      if (this._totalTicket >= numberOfTicket) {
        if (numberOfTicket >= 5) {
          this._price = this._perTicketPrice * numberOfTicket - discount;
  this._luggageWeight = carringWeight * numberOfTicket
          if (this._luggageWeight >= 100) {
            this._price += (this._price * 5) / 100;
          }
          this.buyerName = buyerName;
          this._numberOfTicket = numberOfTicket;
         
          // this._price = price;
          this._totalTicket -= numberOfTicket;
          console.log("Ticket info :",this.getTicketInfo())
        } else {
          this.buyerName = buyerName;
          this._numberOfTicket = numberOfTicket;
          this._luggageWeight = carringWeight;
          this._price = this._perTicketPrice * numberOfTicket;
          this._totalTicket -= numberOfTicket;
          console.log("Ticket info :",this.getTicketInfo())
        }
      } else {
        throw("Insufficient number of tickets");
      }
    } else {
      throw("You are not logged in");
    }
  }
  

  createAccount(email: string, password: string, buyerName:string): void {
    this.email = email;
    this._password = password;
    this.buyerName = buyerName;

    
  }

  login(email: string, password: string): any {
  
     ( this.email === email && this._password=== password) ?
      this._IsLogin = true : this._IsLogin = false;
   
    return this._IsLogin;
  }
  
}
    let ticket = new Ticket() 
    ticket.createAccount('test4@example.com', 'password','jamal');
    ticket.login('test4@example.com', 'password'); 
    ticket.buyTicket(ticket.getTicketInfo().buyerName, 50, 10);
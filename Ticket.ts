
export class Ticket {
  private buyerName: string;
  private _numberOfTicket: number;
  private _price: number;
  private _perTicketPrice: number;
  private _carringWeight: number;
  private _totalTicket: number;
  private _password: string;
  private email: string;
  private _login: boolean;

  constructor() {
    this._numberOfTicket = 0;
    this._price = 0;
    this._perTicketPrice = 50;
    this._carringWeight = 0;
    this._totalTicket = 50;
    this._login = false;
  }

  getTicketInfo(): { buyerName: string, numberOfTicket: number, price: number, carringWeight: number } {
    return {
      buyerName: this.buyerName,
      numberOfTicket: this._numberOfTicket,
      price: this._price,
      carringWeight: this._carringWeight
    };
  }

  buyTicket(buyerName: string, numberOfTicket: number, carringWeight: number): void {
    if (this._login===true) {
      if (this._totalTicket >= numberOfTicket) {
        if (numberOfTicket >= 5) {
          this._price = this._perTicketPrice * numberOfTicket - ((this._perTicketPrice * numberOfTicket) * 17) / 100;
  
          if (this._carringWeight >= 100) {
            this._price += (this._price * 5) / 100;
          }
          this.buyerName = buyerName;
          this._numberOfTicket = numberOfTicket;
          this._carringWeight = carringWeight;
          // this._price = price;
          this._totalTicket -= numberOfTicket;
          console.log(this.getTicketInfo())
        } else {
          this.buyerName = buyerName;
          this._numberOfTicket = numberOfTicket;
          this._carringWeight = carringWeight;
          this._price = this._perTicketPrice * numberOfTicket;
          this._totalTicket -= numberOfTicket;
          console.log(this.getTicketInfo())
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
      this._login = true : this._login = false;
   
    return this._login;
      
    
  }
}


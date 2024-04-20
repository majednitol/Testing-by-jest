export class Counter {
    private _count: number;
  
    constructor() {
      this._count = 0;
    }
  
    
    getCount(): number {
      return this._count;
    }
  
  
    setCount(value: number): void {
      this._count = value;
    }
  
    increment(): void {
      this._count++;
    }
  
    decrement(): void {
      this._count--;
    }
  }
  
import { Counter } from './Counter';

describe('Counter', () => {
    // creating a object (instance of Counter) type variable
  let counter: Counter;

  beforeEach(() => {
     counter = new Counter();
  });

  it('should initialize count to 0', function() {
    expect(counter.getCount()).toBe(0);
  });

  it('should increment count by 1', function()  {
    counter.increment();
    expect(counter.getCount()).toBe(1);
  });

  it('should decrement count by 1', function()  {
    counter.decrement();
    expect(counter.getCount()).toBe(-1);
  });

  it('should set count and get count both will be same value', function()  {
    counter.setCount(5);
    expect(counter.getCount()).toBe(5);
  });
});

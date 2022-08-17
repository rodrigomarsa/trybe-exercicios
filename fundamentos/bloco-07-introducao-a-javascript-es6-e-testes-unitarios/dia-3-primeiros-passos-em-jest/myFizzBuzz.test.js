const myFizzBuzz = require('./myFizzBuzz');

describe('testa a função myFizzBuzz', () => {
  it('deve retornar a string correta', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  })

  it('deve retornar a string correta', () => {
    expect(myFizzBuzz(6)).toBe('fizz');
  })

  it('deve retornar a string correta', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  })

  it('deve retornar a string correta', () => {
    expect(myFizzBuzz(4)).toBe(4);
  })

  it('deve retornar a string correta', () => {
    expect(myFizzBuzz('3')).toBe(false);
  })
})
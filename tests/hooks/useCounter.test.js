const { renderHook, act } = require("@testing-library/react")
const { useCounter } = require("../../src/hooks/useCounter")

describe('Pruebas en el useCounter', () => {
  test('debe retornar los valores por defecto', () => {
    const { result } = renderHook ( () => useCounter() );
    const {counter, decrement, increment, reset} = result.current;

    expect(counter).toBe(10);
    expect(decrement).toEqual(expect.any(Function));
    expect(increment).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));

  });

  test('debe de generar el counter con el valor de 100', () => {

    const { result } = renderHook ( () => useCounter(100) );
    const {counter} = result.current;
    expect(counter).toBe(100);
  });

  test('debe de incrementar el contador', () => {

    const { result } = renderHook ( () => useCounter(100) );
    const {counter, increment} = result.current;
    
    act( () => {
        increment();
    } );


    expect(result.current.counter).toBe(101)
  });

  test('debe de decrementar el contador', () => {

    const { result } = renderHook ( () => useCounter(100) );
    const {counter, decrement} = result.current;
    
    act( () => {
        decrement();
    } );


    expect(result.current.counter).toBe(99)
  });
  test('debe de resetear el contador', () => {

    const { result } = renderHook ( () => useCounter(100) );
    const {counter, reset} = result.current;
    
    act( () => {
        reset();
    } );


    expect(result.current.counter).toBe(100)
  });
  
  
})
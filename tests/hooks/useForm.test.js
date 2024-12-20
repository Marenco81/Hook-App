import { act, renderHook, waitForElementToBeRemoved } from "@testing-library/react"
import { useForm } from "../../src/hooks/useForm";

describe('Pruebas en useForm', () => {
  test('debe de regrasar los valores por defecto', () => {

    const initialForm = {
        name: 'Fernando',
        email: 'ejemplo@gmail.com'
    }
    
    const { result } = renderHook( () => useForm(initialForm) );
    // const {} = result.current;
    expect(result.current).toEqual({
        name: initialForm.name,
        email: initialForm.email,
        formState: initialForm,
        onInputChange: expect.any(Function),
        onResetForm: expect.any(Function),  
       });

  });

  test('debe de cambiar el nombre del formulario', () => {

    const initialForm = {
        name: 'Fernando',
        email: 'ejemplo@gmail.com'
    }
    
    const newValue = 'Juan';
    const { result } = renderHook( () => useForm(initialForm) );
    const {onInputChange} = result.current;

    act ( () => {
        onInputChange({ target:{ name: 'name', value: newValue} })
    })

    expect(result.current.name).toBe(newValue);
    expect(result.current.formState.name).toBe(newValue);

  });

  test('debe de realizar el reset del formulario', () => {

    const initialForm = {
        name: 'Fernando',
        email: 'ejemplo@gmail.com'
    }
    
    const newValue = 'Juan';
    const { result } = renderHook( () => useForm(initialForm) );
    const {onInputChange} = result.current;
    const {onResetForm} = result.current

    act ( () => {
        onInputChange({ target:{ name: 'name', value: newValue} })
        onResetForm();
    })

    expect(result.current.name).toBe(initialForm.name);
    expect(result.current.formState.name).toBe(initialForm.name);

  });
  
  
})

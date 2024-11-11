import { fireEvent, render, screen } from "@testing-library/react"
import { MultipleCustomHoooks } from "../../src/03-examples/MultipleCustomHoooks"
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";

jest.mock("../../src/hooks/useFetch");
jest.mock("../../src/hooks/useCounter");


describe('Pruebas en MultipleCustomHooks', () => {


    const mockIncrement = jest.fn();

        useCounter.mockReturnValue ({
            counter: 1,
            increment: mockIncrement
        });


  test('debe de mostrar ek componente por defecto', () => {

    useFetch.mockReturnValue ({
        data: null,
        isLoading: true,
        hasError: null,
    });
    
    render(<MultipleCustomHoooks/>);

    expect(screen.getByText('Cargando'));

    const nextButton = screen.getByRole('button', {name:'Siguiente'});

    screen.debug();
  });

//   test('debe de mostrar un pokemon', () => {

//     useFetch.mockReturnValue ({
//         data: [
//             {
//                 id: 123, 
//                 name:'pikachu', 
//                 sprites:{[
//                     data.sprites.front_default,
//                     data.sprites.front_shiny,
//                     data.sprites.back_default,
//                     data.sprites.back_shiny,
//                 ]},
//             }
//         ],
//         isLoading: false,
//         hasError: null,
//     });

//     render(<MultipleCustomHoooks/>);
//   });

    test('debe llamar la funcion de incrementar', () => {

        

        useFetch.mockReturnValue ({
            data: null,
            isLoading: true,
            hasError: null,
        });

        
        
        render(<MultipleCustomHoooks/>);
    
        expect(screen.getByText('Cargando'));
    
        const nextButton = screen.getByRole('button', {name:'Siguiente'});
        fireEvent.click(nextButton);
        expect(mockIncrement).toHaveBeenCalled();

    })
    
  
  
})

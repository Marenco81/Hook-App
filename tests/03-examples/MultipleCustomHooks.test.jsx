import { render, screen } from "@testing-library/react"
import { MultipleCustomHoooks } from "../../src/03-examples/MultipleCustomHoooks"


describe('Pruebas en MultipleCustomHooks', () => {
  test('debe de mostrar ek componente por defecto', () => {
    
    render(<MultipleCustomHoooks/>);

    expect(screen.getByText('Cargando'));

    const nextButton = screen.getByRole('button', {name:'Siguiente'})

    screen.debug();
  })
  
})

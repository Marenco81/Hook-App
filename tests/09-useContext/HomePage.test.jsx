const { render, screen } = require("@testing-library/react")
const { HomePage } = require("../../src/09-useContext/HomePage");
const { UserContext } = require("../../src/09-useContext/context/UserContext");


describe('Pruebas en HomePage', () => {
  

    const user = {
        id:1,
        name: 'Fernando',
    }

    test('debe de mostrar el componente sin el usuario', () => {
      
        render(
            <UserContext.Provider value={ {user: null} }>
                <HomePage/>    
            </UserContext.Provider>
            
        );

        const preTag = screen.getByLabelText('pre'); //aria-label
        expect(preTag.innerHTML).toBe('null');
        // screen.debug();
    });

    test('debe de mostrar el componente CON el usuario', () => {
      
        render(
            <UserContext.Provider value={ {user: user} }>
                <HomePage/>    
            </UserContext.Provider>
            
        );

        const preTag = screen.getByLabelText('user'); //aria-label
        expect(preTag.innerHTML).toContain('Fernando');
        screen.debug();
    });   
})

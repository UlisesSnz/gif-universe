import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../components/AddCategory";

describe('Pruebas en <AddCategory />', () => {
  
    const inputValue = 'developer';

    test('debe de cambiar el valor de la caja de texto', () => {
      
        render( <AddCategory onAddNewCategory={ () => {} } /> );

        const input = screen.getByRole('textbox');

        fireEvent.input( input, { target: { value: inputValue } } );

        expect( input.value ).toBe( inputValue );

    });

    test('debe de llamar a onAddNewCategory() si el input tiene un valor', () => {

        const onAddNewCategory = jest.fn();

        render( <AddCategory onAddNewCategory={ onAddNewCategory } /> );

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: 'developer' } } );
        fireEvent.submit( form );

        expect( input.value ).toBe('');
        expect( onAddNewCategory ).toBeCalled();
        expect( onAddNewCategory ).toBeCalledTimes(1);
        expect( onAddNewCategory ).toBeCalledWith( inputValue );

    });
    

    test('no debe llamar a onAddNewCategory() si el input está vacio', () => {
      
        const onAddNewCategory = jest.fn();

        render( <AddCategory onAddNewCategory={ onAddNewCategory } /> );

        const form = screen.getByRole('form');
        fireEvent.submit( form );

        expect( onAddNewCategory ).not.toHaveBeenCalled();
        expect( onAddNewCategory ).toHaveBeenCalledTimes(0);

    });
    
})

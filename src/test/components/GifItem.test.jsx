import { fireEvent, render, screen } from '@testing-library/react';
import { GifItem } from '../../components';
import { handleDeleteGif } from '../../helpers';

jest.mock( '../../helpers' );

describe('Pruebas en <GifItem />', () => {

    const id = '123';
    const title = 'developer';
    const url = 'https://localhost/developer.jpg';
  
    test('debe hacer match con el snapshot', () => {
      
        const { container } = render( <GifItem id={id} title={title} url={url} /> );
        expect( container ).toMatchSnapshot();

    });

    test('debe de mostrar la imagen con el URL y el ALT indicado', () => {

        render( <GifItem id={id} title={title} url={url} /> );

        expect( screen.getByRole('img').src ).toBe( url );
        expect( screen.getByRole('img').alt ).toBe( title );
      
    });

    test('debe de mostrar el título y el id en el componente', () => {
      
        render( <GifItem id={id} title={title} url={url} /> );

        expect( screen.getByText( title ) ).toBeTruthy();
        expect( screen.getByTestId( id ) ).toBeTruthy();

    });

    test('debe de mostrar la ventana modal al presionar el botón "Expand"', () => {
      
        render( <GifItem id={id} title={title} url={url} /> );

        const btnExpand = screen.getByTestId( 'btnExpand' );

        fireEvent.click( btnExpand );

        expect( screen.getAllByRole( 'img' ).length ).toBe(2);

    });
    
    test('debe de ejecutar handleDeleteGif al presionar el botón "Delete"', () => {

        handleDeleteGif.mockReturnValue = 'success';

        render( <GifItem id={id} title={title} url={url} /> );

        const btnDelete = screen.getByTestId( 'btnDelete' );

        fireEvent.click( btnDelete );

        expect( handleDeleteGif ).toHaveBeenCalled();
        expect( handleDeleteGif ).toHaveBeenCalledTimes(1);

    });

})

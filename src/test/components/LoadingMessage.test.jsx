import { render, screen } from '@testing-library/react';
import { LoadingMessage } from '../../components/LoadingMessage';

describe('Pruebas en <LoadingMessage />', () => {

    const category = 'developer';
  
    test('debe hacer match con el snapshot', () => {
      
        const { container } = render( <LoadingMessage category={ category } /> );
        expect( container ).toMatchSnapshot();

    });
    
    test('debe mostrar la categoría en el mensaje de carga', () => {
      
        render( <LoadingMessage category={ category } /> );
        expect( screen.getByRole('heading', { level: 2 }).innerHTML ).toContain( `Exploring "${ category }" in the Gif-Verse` );

    });
    

})

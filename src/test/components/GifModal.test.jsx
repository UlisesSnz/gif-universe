import { fireEvent, render, screen } from "@testing-library/react";
import { GifModal } from "../../components/GifModal";

describe('Pruebas en <GifModal />', () => {

    const title = 'developer';
    const url = 'https://localhost/developer.jpg';
  
    test('debe de hacer match con el snapshot', () => {
      
        const { container } = render( <GifModal  title={ title } url={ url } showModal={ true } handleCloseModal={ () => {} } handleShowToast={ () => {} } /> );

        expect( container ).toMatchSnapshot();

    });

    test('debe de mostrar la imagen con el URL indicado', () => {

        render( <GifModal  title={ title } url={ url } showModal={ true } handleCloseModal={ () => {} } handleShowToast={ () => {} } /> );
        
        expect( screen.getByRole( 'img' ).src ).toBe( url );
        
    });
    
    test('debe de mostrar el título en el componente', () => {

        render( <GifModal  title={ title } url={ url } showModal={ true } handleCloseModal={ () => {} } handleShowToast={ () => {} } /> );
        
        expect( screen.getByText( title ) ).toBeTruthy();
        
    });

    test('debe de llamar a handleCloseModal() si se presiona el botón "Close"', () => {

        const handleCloseModal = jest.fn();

        render( <GifModal  title={ title } url={ url } showModal={ true } handleCloseModal={ handleCloseModal } handleShowToast={ () => {} } /> );
        
        const btnClose = screen.getByText( 'Close' );

        fireEvent.click( btnClose );

        expect( handleCloseModal ).toHaveBeenCalled();
        expect( handleCloseModal ).toHaveBeenCalledTimes(1);
        
    });

    test('debe de llamar a handleShowToast() si se presiona el botón "Download"', () => {

        const handleShowToast = jest.fn();

        render( <GifModal  title={ title } url={ url } showModal={ true } handleCloseModal={ () => {} } handleShowToast={ handleShowToast } /> );
        
        const btnDownload = screen.getByText( 'Download' );

        fireEvent.click( btnDownload );

        expect( handleShowToast ).toHaveBeenCalled();
        expect( handleShowToast ).toHaveBeenCalledTimes(1);
        
    });

})
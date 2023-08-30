import { render, screen } from '@testing-library/react';
import { ToastNotification } from '../../components/ToastNotification';

describe('Pruebas en <ToastNotification />', () => {
  
    const title = 'developer';
    const type = 'success';

    test('debe hacer match con el snapshot', () => {

        const { container } = render( <ToastNotification title={ title } type={ type } showToast={ true } handleCloseToast={ () => {} } /> );

        expect( container ).toMatchSnapshot();

    });

    test('debe de mostrar el tipo de notificación en el componente', () => {

        render( <ToastNotification title={ title } type={ type } showToast={ true } handleCloseToast={ () => {} } /> );

        expect( screen.getByText( type ) ).toBeTruthy();

    });
    
    test('debe de mostrar el mensaje de descarga exitosa', () => {

        render( <ToastNotification title={ title } type={ type } showToast={ true } handleCloseToast={ () => {} } /> );

        expect( screen.getByText( `${title} has been downloaded` ) ).toBeTruthy();

    });

    test('debe de mostrar el mensaje de descarga fallida', () => {

        render( <ToastNotification title={ title } type={ 'danger' } showToast={ true } handleCloseToast={ () => {} } /> );

        expect( screen.getByText( `${title} could not be downloaded` ) ).toBeTruthy();

    });

    test('no debe de mostrar el toast', () => {

        render( <ToastNotification title={ title } type={ type } showToast={ false } handleCloseToast={ () => {} } /> );

        expect( screen.queryAllByText( title ).length ).toBe(0);
        expect( screen.queryAllByText( type ).length ).toBe(0);

    });

})

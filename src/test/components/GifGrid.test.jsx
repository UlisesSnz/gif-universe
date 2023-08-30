import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { GifGrid } from '../../components';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import { act } from 'react-dom/test-utils';

jest.mock( '../../hooks/useFetchGifs' );

describe('Pruebas en <GifGrid />', () => {

    const category = 'Developer';
  
    test('debe de mostrar el mensaje de carga inicialmente', () => {

        useFetchGifs.mockReturnValue({
            dataGifs: [],
            isLoading: true,
        });
    
        render( <GifGrid category={ category } handleDeleteCategories={ () => {} } handleDeleteCategory={ () => {} } /> );

        expect( screen.getByText(`Exploring "${ category }" in the Gif-Verse`) ).toBeTruthy();
        
    });
    
    test('debe de mostrar items cuando se cargan las imágenes usando useFetchGifs', () => {
      
        useFetchGifs.mockReturnValue({
            dataGifs: [
                {
                    id: '123',
                    title: 'java script',
                    url: 'https://localhost/developer.jpg',
                },
                {
                    id: 'abc',
                    title: 'react 18',
                    url: 'https://localhost/react-18.jpg',
                },
            ],
            isLoading: false,
        });

        render( <GifGrid category={ category } handleDeleteCategories={ () => {} } handleDeleteCategory={ () => {} } /> );

        expect( screen.getAllByRole( 'img' ).length ).toBe( 2 );

    });

    test('debe de ejecutar handleDeleteCategory al presionar el botón "Delete <nombre de la categoría> category"', async() => {
      
        const handleDeleteCategory = jest.fn();

        render( <GifGrid category={ category } handleDeleteCategories={ () => {} } handleDeleteCategory={ handleDeleteCategory } /> );

        const navDropdownButton = screen.getByText( category );

        act(() => {
            fireEvent.click( navDropdownButton );
        });
        
        await waitFor(
            () => expect( screen.getByTestId( 'btnDeleteCategory' ) ).toBeTruthy(),
        );

        const btnDeleteCategory = screen.getByTestId( 'btnDeleteCategory' );

        fireEvent.click( btnDeleteCategory );

        expect( handleDeleteCategory ).toHaveBeenCalled();
        expect( handleDeleteCategory ).toHaveBeenCalledTimes( 1 );

    });

    test('debe de ejecutar handleDeleteCategory al presionar el botón "Delete <nombre de la categoría> category"', async() => {
      
        const handleDeleteCategories = jest.fn();

        render( <GifGrid category={ category } handleDeleteCategories={ handleDeleteCategories } handleDeleteCategory={ () => {} } /> );

        const navDropdownButton = screen.getByText( category );

        act(() => {
            fireEvent.click( navDropdownButton );
        });
        
        await waitFor(
            () => expect( screen.getByTestId( 'btnDeleteCategories' ) ).toBeTruthy(),
        );

        const btnDeleteCategories = screen.getByTestId( 'btnDeleteCategories' );

        fireEvent.click( btnDeleteCategories );

        expect( handleDeleteCategories ).toHaveBeenCalled();
        expect( handleDeleteCategories ).toHaveBeenCalledTimes( 1 );

    });
    
})
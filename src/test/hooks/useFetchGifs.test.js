import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../hooks/useFetchGifs";

describe('Pruebas en useFetchGifs', () => {

    test('debe de regresar el estado inicial', () => {
      
        const { result } = renderHook( () => useFetchGifs( 'developer' ) );

        const { dataGifs, isLoading } = result.current;

        expect( dataGifs.length ).toBe( 0 );
        expect( isLoading ).toBeTruthy();

    });
    
    test('debe de retornar un arreglo de imagenes', async() => {
      
        const { result } = renderHook( () => useFetchGifs( 'developer' ) );

        await waitFor( () => 
            expect( result.current.dataGifs.length ).toBeGreaterThan( 0 ),
        );

        const { dataGifs, isLoading } = result.current;

        expect( dataGifs.length ).toBeGreaterThan( 0 );
        expect( isLoading ).toBeFalsy();

    });

})

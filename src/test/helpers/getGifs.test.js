import { getGifs } from '../../helpers/getGifs';

describe('Pruebas en getGifs()', () => {
  
    test('debe retornar un arreglo de gifs', async () => {
      
        const gifsArray = await getGifs( 'developer' )

        expect( gifsArray.length ).toBeGreaterThan( 0 );
        expect( gifsArray[0] ).toEqual({
            id: expect.any( String ),
            title: expect.any( String ),
            url: expect.any( String ),
        });

    });

})

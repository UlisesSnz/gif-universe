import { handleDeleteGif } from "../../helpers/handleDeleteGif";

describe('Pruebas en handleDeleteGifs()', () => {
  
    test('debe eliminar el elemento si se confirma la eliminación', () => {
      
        const mockRemove = jest.fn();

        const mockEvent = {
            target: {
                closest: () => ({
                    remove: mockRemove,
                }),
            },
        }

        const confirmSpy = jest.spyOn(window, 'confirm').mockReturnValue(true);

        handleDeleteGif(mockEvent);

        expect(mockRemove).toHaveBeenCalled();
        expect(mockRemove).toHaveBeenCalledTimes(1);

        confirmSpy.mockRestore();
        
    });
    
    test('no debe eliminar el elemento si se cancela la confirmación', () => {
      
        const mockRemove = jest.fn();

        const mockEvent = {
            target: {
                closest: () => ({
                    remove: mockRemove,
                }),
            },
        }

        const confirmSpy = jest.spyOn(window, 'confirm').mockReturnValue(false);

        handleDeleteGif(mockEvent);

        expect(mockRemove).not.toHaveBeenCalled();
        expect(mockRemove).toHaveBeenCalledTimes(0);

        confirmSpy.mockRestore();

    });
    
})

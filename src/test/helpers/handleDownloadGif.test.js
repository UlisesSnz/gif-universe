import { handleDownloadGif } from "../../helpers/handleDownloadGif";

describe('Pruebas en handleDownloadGif', () => {

    const title = 'gifTitle';
    const url = 'testURL';
  
    test('debe retornar success en caso de descarga exitosa', async () => {
      
        // Successful fetch mock returning a blob
        global.fetch = jest.fn().mockResolvedValue({
            blob: jest.fn().mockResolvedValue(new Blob()),
        });

        // Mock the createObjectURL function
        window.URL.createObjectURL = jest.fn().mockReturnValue('blobURL');

        // Mock for the window object
        const windowSpy = jest.spyOn(global, 'window', 'get');
        windowSpy.mockImplementation(() => ({
        URL: {
            createObjectURL: jest.fn().mockReturnValue('blobURL'),
        },
        open: jest.fn(),
        }));

        const result = await handleDownloadGif(title, url);

        // Verify that the function returns 'success'
        expect(result).toBe('success');

        // Verify that functions and methods were called correctly
        expect(global.fetch).toHaveBeenCalledWith('testURL');
        expect(windowSpy).toHaveBeenCalled();

    });

    test('debe retornar danger en caso de descarga fallida', async () => {
      
        global.fetch = jest.fn().mockRejectedValue(new Error('Download failed'));

        const result = await handleDownloadGif(title, url);

        expect(result).toBe('danger');

    });
    
})

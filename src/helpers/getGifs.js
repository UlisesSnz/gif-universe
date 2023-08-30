export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=4rieW3tX1B45ItkMKHWbTKnnKjqlq73p&q=${ category }&limit=9&offset=0`;
    const res = await fetch(url);
    const { data } = await res.json();

    const dataGifs = data.map(gif => {
        const title = gif.title === '' ? category : gif.title;
        
        return {
            id: gif.id,
            title,
            url: gif.images.downsized_medium.url,
        }
    });

    return dataGifs;
}
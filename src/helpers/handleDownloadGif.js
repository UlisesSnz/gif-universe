export const handleDownloadGif = async (title, url) => {
    try {
        // Create a link (<a>) for the download
        const link = document.createElement('a');

        // Get the GIF Blob file via a fetch request
        const file = await (await fetch(url)).blob();

        // Configure link attributes for download
        link.download = title; // Filename
        link.href = window.URL.createObjectURL(file); // Blob file URL
        link.dataset.downloadurl = ['application/octet-stream', link.download, link.href].join(':');

        // Start the download by simulating a click on the link
        link.click();

        // Remove link after download
        link.remove();
        return 'success';

    } catch(error) {
        // console.error('Error while downloading GIF:', error);
        return 'danger';
    }
}
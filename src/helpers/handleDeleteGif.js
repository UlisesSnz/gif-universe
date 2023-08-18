export const handleDeleteGif = (e) => {
    const isConfirmed = window.confirm('Are you sure delete this gif?');
    if(!isConfirmed) return;
    const parentWithDataId = e.target.closest('[data-id]');
    parentWithDataId.remove();
}
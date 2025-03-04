const onInputHandler = (event: Event) => {
    const target = event.target as HTMLInputElement;
    const newImageUrl = window.URL.createObjectURL(target.files![0]);
    const imgElement = target.previousElementSibling as HTMLImageElement;
    const oldImageUrl = imgElement!.src.slice(5, -2);
    if (oldImageUrl.startsWith('blob:')) {
        window.URL.revokeObjectURL(oldImageUrl);
    }
    imgElement.src = newImageUrl;
    target.dataset.imageApplied = 'true';
};

const registerColumnHeaderListeners = () => {
    document
        .querySelectorAll('[data-edition-cover-selector]')
        .forEach((element) => {
            element.addEventListener('input', onInputHandler);
        });
};

export default registerColumnHeaderListeners;

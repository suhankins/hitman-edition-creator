const onClickListener = (event: Event) => {
    const target = event.target;
    if (!(target instanceof HTMLButtonElement)) {
        return;
    }
    // First parent element is cell, second is row
    target?.parentElement?.parentElement?.remove();
};

const registerDeleteRowButtonListeners = () => {
    document.querySelectorAll('[data-delete-row-button]').forEach((button) => {
        button.addEventListener('click', onClickListener);
    });
};

export default registerDeleteRowButtonListeners;

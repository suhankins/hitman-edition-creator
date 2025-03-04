const onClickEvent = (event: Event) => {
    const target = event.target as HTMLElement;
    target.ariaPressed = `${!(target.ariaPressed === 'true')}`;
};

const registerCellListeners = () => {
    document.querySelectorAll('[data-cell]').forEach((cell) => {
        cell.addEventListener('click', onClickEvent);
    });
};

export default registerCellListeners;

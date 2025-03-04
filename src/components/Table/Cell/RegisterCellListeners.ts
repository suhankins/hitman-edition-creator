const onClickEvent = (event: Event) => {
    const target = event.target as HTMLElement;
    target.ariaPressed = `${!(target.ariaPressed === 'true')}`;
};

const onKeyDown = (event: Event) => {
    if (!(event instanceof KeyboardEvent)) {
        return;
    }
    const target = event.target as HTMLButtonElement;
    switch (event.key) {
        case 'ArrowLeft':
            {
                const previousCell =
                    target.parentElement?.previousElementSibling?.children.item(
                        0
                    );
                if (!(previousCell instanceof HTMLButtonElement)) {
                    return;
                }
                previousCell.focus();
            }
            break;
        case 'ArrowRight':
            {
                const nextCell = target.parentElement?.nextElementSibling;
                const nextCellButton = nextCell?.children.item(0);
                if (
                    !(nextCellButton instanceof HTMLButtonElement) ||
                    !(nextCell instanceof HTMLElement) ||
                    // Ignoring right most "delete row" button
                    nextCell.dataset.tableColumn === undefined
                ) {
                    return;
                }
                nextCellButton.focus();
            }
            break;
        case 'ArrowUp':
            {
                const parentCell = target.parentElement;
                const row = parentCell?.parentElement;
                const cellIndex = Array.prototype.indexOf.call(
                    row?.children,
                    parentCell
                );
                const higherCell =
                    row?.previousElementSibling?.children.item(cellIndex);
                const higherCellButton = higherCell?.children.item(0);
                if (!(higherCellButton instanceof HTMLButtonElement)) {
                    return;
                }
                higherCellButton.focus();
            }
            break;
        case 'ArrowDown':
            {
                const parentCell = target.parentElement;
                const row = parentCell?.parentElement;
                const cellIndex = Array.prototype.indexOf.call(
                    row?.children,
                    parentCell
                );
                const lowerCell =
                    row?.nextElementSibling?.children.item(cellIndex);
                const lowerCellButton = lowerCell?.children.item(0);
                if (!(lowerCellButton instanceof HTMLButtonElement)) {
                    return;
                }
                lowerCellButton.focus();
            }
            break;
        default:
            return;
    }

    event.preventDefault();
};

const registerCellListeners = () => {
    document.querySelectorAll('[data-cell]').forEach((cell) => {
        cell.addEventListener('click', onClickEvent);
        cell.addEventListener('keydown', onKeyDown);
    });
};

export default registerCellListeners;

const onClickEvent = (event: Event) => {
    const target = event.target as HTMLButtonElement;
    const tableColumn = target.parentElement!.dataset.tableColumn ?? '';
    const parsedTableColumn = parseInt(tableColumn);
    document.querySelectorAll(`[data-table-column]`).forEach((element) => {
        if (!(element instanceof HTMLElement)) {
            console.log(
                'this doesnt make any sense and i hate my life',
                element
            );
            return;
        }
        if (element.dataset.tableColumn === tableColumn) {
            element.remove();
        }
        const elementTableColumn = parseInt(element.dataset.tableColumn ?? '');
        if (elementTableColumn > parsedTableColumn) {
            element.dataset.tableColumn = `${elementTableColumn - 1}`;
        }
    });
};

const registerDeleteColumnButtonListeners = () => {
    document
        .querySelectorAll('[data-delete-column-button]')
        .forEach((button) => {
            button.addEventListener('click', onClickEvent);
        });
};

export default registerDeleteColumnButtonListeners;

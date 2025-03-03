import type ITableState from './ITableState';

const BLANK_STATE: ITableState = {
    editions: [
        {
            name: 'Standard Edition',
            image: 'todo',
        },
    ],
    content: [
        {
            name: 'Sapienza',
            ownership: [true],
        },
    ],
};

export default BLANK_STATE;

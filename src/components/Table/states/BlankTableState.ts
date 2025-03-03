import type ITableState from './ITableState';

const BLANK_STATE: ITableState = {
    editions: [
        {
            name: 'Standard Edition',
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

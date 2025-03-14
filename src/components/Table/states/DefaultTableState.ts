import type ITableState from './ITableState';

const DEFAULT_STATE: ITableState = {
    editions: [
        {
            name: 'Free\nStarter Pack',
            image: '/covers/free.png',
        },
        {
            name: 'Episode:\nSapienza',
            image: '/covers/sapienza.png',
        },
        {
            name: 'Part\nOne',
            image: '/covers/partone.png',
        },
        {
            name: 'Standard Edition',
            image: '/covers/standard.png',
        },
        {
            name: 'Deluxe\nEdition',
            image: '/covers/deluxe.png',
        },
    ],
    content: [
        {
            name: 'Free Seasonal Content',
            ownership: [true, true, true, true, true],
        },
        {
            name: 'ICA Training Missions',
            ownership: [true, true, true, true, true],
        },
        {
            name: 'Paris',
            ownership: [false, false, true, true, true],
        },
        {
            name: 'Sapienza',
            ownership: [false, true, true, true, true],
        },
        {
            name: 'Marrakesh',
            ownership: [false, false, true, true, true],
        },
        {
            name: 'Bangkok',
            ownership: [false, false, true, true, true],
        },
        {
            name: 'Colorado',
            ownership: [false, false, true, true, true],
        },
        {
            name: 'Hokkaido',
            ownership: [false, false, true, true, true],
        },
        {
            name: 'Patient Zero Campaign',
            ownership: [false, false, true, true, true],
        },
        {
            name: '3 Deluxe Escalations',
            ownership: [false, false, true, true, true],
        },
        {
            name: 'Freelancer Game Mode',
            ownership: [false, false, false, true, true],
        },
        {
            name: 'VR Mode',
            ownership: [false, false, false, true, true],
        },
        {
            name: "Hawke's Bay",
            ownership: [false, false, false, true, true],
        },
        {
            name: 'Miami',
            ownership: [false, false, false, true, true],
        },
        {
            name: 'Santa Fortuna',
            ownership: [false, false, false, true, true],
        },
        {
            name: 'Mumbai',
            ownership: [false, false, false, true, true],
        },
        {
            name: 'Whittleton Creek',
            ownership: [false, false, false, true, true],
        },
        {
            name: 'Isle of Sgàil',
            ownership: [false, false, false, true, true],
        },
        {
            name: 'Dubai',
            ownership: [false, false, false, true, true],
        },
        {
            name: 'Dartmoor',
            ownership: [false, false, false, true, true],
        },
        {
            name: 'Berlin',
            ownership: [false, false, false, true, true],
        },
        {
            name: 'Chongqing',
            ownership: [false, false, false, true, true],
        },
        {
            name: 'Mendoza',
            ownership: [false, false, false, true, true],
        },
        {
            name: 'Carpathian Mountains',
            ownership: [false, false, false, true, true],
        },
        {
            name: 'Ambrose Island',
            ownership: [false, false, false, true, true],
        },
        {
            name: 'New York',
            ownership: [false, false, false, false, true],
        },
        {
            name: 'Haven Island',
            ownership: [false, false, false, false, true],
        },
        {
            name: '7 Deadly Sins',
            ownership: [false, false, false, false, true],
        },
        {
            name: '2 Special Assignment Packs',
            ownership: [false, false, false, false, true],
        },
        {
            name: '6 Deluxe Escalations',
            ownership: [false, false, false, false, true],
        },
        {
            name: '4 packs of suits and items',
            ownership: [false, false, false, false, true],
        },
    ],
};

export default DEFAULT_STATE;

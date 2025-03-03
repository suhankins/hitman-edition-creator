export default interface ITableState {
    editions: {
        name: string;
        image?: string;
    }[];
    content: {
        name: string;
        ownership: boolean[];
    }[];
}

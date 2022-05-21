export const SERVER = "http://localhost:4000";
export enum SORT_ORDER {
    ASC = "asc",
    DESC = "desc"
};

export enum SORT_VALUES {
    TITLE = "title",
    GENRES = "genres"
};

export const SORT_LIST = [
    {
        title: 'Title',
        value: SORT_VALUES.TITLE
    },
    {
        title: 'Genres',
        value: SORT_VALUES.GENRES
    }
];

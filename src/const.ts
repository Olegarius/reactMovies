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

export const colors = {
    color_red: '#F65261',
    color_dark_grey: '#424242',
    color_black: '#232323',
    color_grey: '#555555',
    color_white: '#FFFFFF'
};

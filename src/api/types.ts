
import {SORT_ORDER, SORT_VALUES} from "../const";

export type TFilterProps = {
    sortBy?: string | null;
    sortOrder?: string | null;
    search?: string | null;
    searchBy?: string | null;
    filter?: string[] | null;
    offset?: string | number | null;
    limit?: string | number | null;
}

export type TMovie = {
    title: string,
    tagline?: string,
    vote_average?: number,
    vote_count?: number,
    release_date?: string,
    poster_path: string,
    overview: string,
    budget?: number,
    revenue?: number,
    runtime: number,
    genres: string[],
    id?: string | number
}
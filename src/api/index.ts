import axios from "axios";
import {SERVER} from "../const";
import {TFilterProps, TMovie} from "./types";

export const getFilterItems = async () => {
    //return fetch('/data/filters.json').json();
    const responseData: {data: any[]} = await axios.get('/data/filters.json');
    return responseData.data;
};

export const getMovies = async (data: TFilterProps) => {
    const queryParams: any = {};
    Object.entries(data).filter(([, value]) => (value ?? false)).forEach(([key, value]) => (queryParams[key] = value));
    const params = Object.keys(queryParams).length > 0 ? new URLSearchParams(queryParams).toString() : null;

    const resultData = await fetch(`${SERVER}/movies${params ? `?${params}` : ""}`);

    return resultData.json();
};

export const getMovie = async (id: string | number) => {
   const resultData = await fetch(`${SERVER}/movies?id=${id}`);

   return resultData.json();
};

export const removeMovie = (id: string | number) => fetch(`${SERVER}/movies/${id}`, {method: 'DELETE'});

export const createMovie = async (movie: TMovie) => {
    const resultData = await fetch(`${SERVER}/movies`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(movie)
    });
    return resultData.json();
};

export const updateMovie = async (movie: TMovie) => {
    const resultData = await fetch(`${SERVER}/movies`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(movie)
    });
    return resultData.json();
};

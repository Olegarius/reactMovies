import { createAsyncThunk } from "@reduxjs/toolkit";

import * as service from "../../../api";
import {TFilterProps, TMovie} from "../../../api/types";

export const getMovies = createAsyncThunk("getMovies", (filterData: TFilterProps) => service.getMovies(filterData));

export const getMovie = createAsyncThunk("getMovie", (id: string | number) => service.getMovie(id));

export const createMovie = createAsyncThunk("createMovie", (data: TMovie) => service.createMovie(data));

export const updateMovie = createAsyncThunk("updateMovie", (data: TMovie) => service.updateMovie(data));

export const removeMovie = createAsyncThunk("removeMovie", (id: string | number) => service.removeMovie(id));

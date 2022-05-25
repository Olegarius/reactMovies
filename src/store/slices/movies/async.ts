import { createAsyncThunk } from "@reduxjs/toolkit";

import * as service from "../../../api";
import {TFilterProps, TMovie} from "../../../api/types";

export const getMovies = createAsyncThunk("getMovies", async (filterData: TFilterProps) => await service.getMovies(filterData));

export const getMovie = createAsyncThunk("getMovie", async (id: string | number) => await service.getMovie(id));

export const createMovie = createAsyncThunk("createMovie", async (data: TMovie) => await service.createMovie(data));

export const updateMovie = createAsyncThunk("updateMovie", async (data: TMovie) => await service.updateMovie(data));

export const removeMovie = createAsyncThunk("removeMovie", async (id: string | number) => await service.removeMovie(id));

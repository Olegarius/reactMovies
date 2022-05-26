import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "../../../api";

export const getFilterItems = createAsyncThunk("getFilterItems", () => service.getFilterItems());
/*
export const getFilterItems = createAsyncThunk(
  "getFilterItems",
  async () => await service.getFilterItems()
);
*/
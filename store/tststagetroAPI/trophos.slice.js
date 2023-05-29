import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_trophos_list = createAsyncThunk(
  "trophos/api_v1_trophos_list",
  async payload => {
    const response = await apiService.api_v1_trophos_list(payload)
    return response.data
  }
)
export const api_v1_trophos_create = createAsyncThunk(
  "trophos/api_v1_trophos_create",
  async payload => {
    const response = await apiService.api_v1_trophos_create(payload)
    return response.data
  }
)
export const api_v1_trophos_retrieve = createAsyncThunk(
  "trophos/api_v1_trophos_retrieve",
  async payload => {
    const response = await apiService.api_v1_trophos_retrieve(payload)
    return response.data
  }
)
export const api_v1_trophos_update = createAsyncThunk(
  "trophos/api_v1_trophos_update",
  async payload => {
    const response = await apiService.api_v1_trophos_update(payload)
    return response.data
  }
)
export const api_v1_trophos_partial_update = createAsyncThunk(
  "trophos/api_v1_trophos_partial_update",
  async payload => {
    const response = await apiService.api_v1_trophos_partial_update(payload)
    return response.data
  }
)
export const api_v1_trophos_destroy = createAsyncThunk(
  "trophos/api_v1_trophos_destroy",
  async payload => {
    const response = await apiService.api_v1_trophos_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const trophosSlice = createSlice({
  name: "trophos",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_trophos_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_trophos_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_trophos_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_trophos_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_trophos_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_trophos_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_trophos_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_trophos_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_trophos_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_trophos_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_trophos_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_trophos_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_trophos_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_trophos_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_trophos_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_trophos_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_trophos_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_trophos_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_trophos_list,
  api_v1_trophos_create,
  api_v1_trophos_retrieve,
  api_v1_trophos_update,
  api_v1_trophos_partial_update,
  api_v1_trophos_destroy,
  slice: trophosSlice
}

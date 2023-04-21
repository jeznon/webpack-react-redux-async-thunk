import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const showAlert = createAsyncThunk(
  'alert/showAlert',
  async (message, { dispatch }) => {
    dispatch(setVisibility(true));
    return new Promise(resolve => {
      setTimeout(() => {
        dispatch(setVisibility(false));
        resolve();
      }, 3000);
    });
  }
);

const alertSlice = createSlice({
  name: 'alert',
  initialState: {
    visible: false,
  },
  reducers: {
    setVisibility: (state, action) => {
      state.visible = action.payload;
    },
  },
});

export const { setVisibility } = alertSlice.actions;
export default alertSlice.reducer;


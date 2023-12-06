import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    formData: [],
  },
  reducers: {
    submitForm: (state, action) => {
      // const newFormData = action.payload;

      // const isDuplicate = state.formData.some(
      //   (data) => data.email === newFormData.email || data.mobileNumber === newFormData.mobileNumber
      // );
      // if (!isDuplicate) {
      //   state.formData = [newFormData, ...state.formData];
      // }
      
      state.formData = [action.payload, ...state.formData];
    },
    deleteFormData: (state, action) => {
      const indexToDelete = action.payload;
      state.formData = state.formData.filter((_, index) => index !== indexToDelete);
    },
  },
});

export const { submitForm ,deleteFormData} = formSlice.actions;

export default formSlice.reducer;

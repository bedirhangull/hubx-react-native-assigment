import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface ICategoriesState {
  data: ICategory[];
  loading: boolean;
  error: string | null;
}

const initialState: ICategoriesState = {
  data: [],
  loading: false,
  error: null
}

export const fetchCategories = () => async (dispatch: any) => {
  try {
    dispatch(categoriesSlice.actions.fetchCategoriesStart());
    const response = await axios.get('https://dummy-api-jtg6bessta-ey.a.run.app/getCategories');
    dispatch(categoriesSlice.actions.fetchCategoriesSuccess(response.data.data));
  } catch (error: any) {
    dispatch(categoriesSlice.actions.fetchCategoriesError(error.message));
  }
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    fetchCategoriesStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchCategoriesSuccess: (state, action: PayloadAction<ICategory[]>) => {
      state.loading = false;
      state.data = action.payload;
    },
    fetchCategoriesError: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload || 'Bir hata oluştu';
    }
  }
});

export default categoriesSlice.reducer;

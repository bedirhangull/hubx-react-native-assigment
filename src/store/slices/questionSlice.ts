import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface QuestionsState {
  questions: Question[];
  isLoading: boolean;
  error: string | null;
}

const initialState: QuestionsState = {
  questions: [],
  isLoading: false,
  error: null,
};

export const fetchQuestions = () => async dispatch => {
  dispatch(fetchQuestionsStart());
  try {
    const response = await axios.get<Question[]>('https://dummy-api-jtg6bessta-ey.a.run.app/getQuestions');
    dispatch(fetchQuestionsSuccess(response.data));
  } catch (error: any) {
    dispatch(fetchQuestionsFailure(error.message));
  }
};

const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    fetchQuestionsStart(state: QuestionsState) {
      state.isLoading = true;
    },
    fetchQuestionsSuccess(state: QuestionsState, action: PayloadAction<Question[]>) {
      state.isLoading = false;
      state.questions = action.payload;
    },
    fetchQuestionsFailure(state: QuestionsState, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchQuestionsStart, fetchQuestionsSuccess, fetchQuestionsFailure } = questionsSlice.actions;

export const selectQuestions = (state: { questions: QuestionsState }) => state.questions.questions;
export default questionsSlice.reducer;

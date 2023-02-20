import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

//slices
import QuestSlice from './slices/questionSlice'
import Categories from './slices/categoriesSlice';

const reducer = {
  questions: QuestSlice,
  categories: Categories 
}

const store = configureStore({
  reducer: reducer,
  devTools: false,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
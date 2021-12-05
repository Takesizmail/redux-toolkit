import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';

// useDispatch with types
export const useAppDispatch = () => useDispatch<AppDispatch>();

// useSelector with types helps in destructuring state.
export const useAppSelector:  TypedUseSelectorHook<RootState> = useSelector;

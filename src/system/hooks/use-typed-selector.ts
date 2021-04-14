import {TypedUseSelectorHook, useSelector} from 'react-redux';
import {IStore} from '../store/root-store';

export const useTypedSelector: TypedUseSelectorHook<IStore> = useSelector;

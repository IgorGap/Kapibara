import {atom} from 'recoil';
import { TProduct } from './types';

export const productsState = atom<TProduct[]>({
  key: 'product',
  default: [], 
});

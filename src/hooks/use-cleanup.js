import {useDispatch} from 'react-redux';
import { clearControls } from '../features/controls/controls-slice';

export const useClenup = () => {
  const dispatch = useDispatch();

  return () => dispatch(clearControls());
}

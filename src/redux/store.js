
import {createStore} from 'redux'
import reducers from './reducers';
import { defaultStore } from '../constants';

const initialState = ({
    ...defaultStore
});

export default createStore(reducers,initialState);


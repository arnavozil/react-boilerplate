import { combineReducers } from 'redux';
import { commonReducer } from './commonReducer';

const rootReducer = combineReducers({
    exampleReducer: commonReducer('EXAMPLE_REDUCER'), // example reducer listening for EXAMPLE_REDUCER type
});

export default rootReducer;
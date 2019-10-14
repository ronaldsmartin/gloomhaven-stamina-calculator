import { combineReducers } from 'redux'
import calculator from './calculator'
import character from './character'

const rootReducer = combineReducers({
    character,
    calculator,
});

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer
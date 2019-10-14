import { combineReducers } from 'redux'
import calculator from './calculator'

const rootReducer = combineReducers({
    calculator
})

export type AppState = ReturnType<typeof rootReducer>
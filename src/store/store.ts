import { combineReducers, createStore } from 'redux'
import { userReducer } from './userReducer'
import { modalReducer } from "./modalReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  modal: modalReducer
})

const store = createStore(rootReducer)

export default store;
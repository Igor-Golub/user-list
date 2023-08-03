import { User } from "../interfaces";
import { REMOVE_USER, SET_USERS, SET_USER_SEARCH_VALUE } from "./constants";

interface State {
  users: User[]
  usersSearchValue: string
}

const initialState: State = {
  users: [],
  usersSearchValue: ''
}

export const userReducer = (state = initialState , { type, payload }: {type: any, payload: any}): State => {
  switch (type) {
    case SET_USERS:
      return {
        ...state,
        users: payload.users,
      }
    case REMOVE_USER:
      return {
        ...state,
        users: state.users.filter(({ id }) => id !== payload.id)
      }
    case SET_USER_SEARCH_VALUE: {
      return {
        ...state,
        usersSearchValue: payload.value
      }
    }
    default:
      return state
  }
}
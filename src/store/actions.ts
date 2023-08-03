import { User } from "../interfaces";
import { REMOVE_USER, SET_USERS, SET_USER_SEARCH_VALUE, OPEN_MODAL, CLOSE_MODAL } from "./constants";

export const setUsers = ({ users }: Record<'users', User[]>) => ({
  type: SET_USERS,
  payload: { users }
})

export const removeUser = ({ id }: Pick<User, 'id'>) => ({
  type: REMOVE_USER,
  payload: { id }
})

export const setUserSearchValue = ({ value }: { value: string }) => ({
  type: SET_USER_SEARCH_VALUE,
  payload: { value }
})

export const openModal = ({ data }: { data: Partial<Pick<User, 'company' | 'address'>> }) => ({
  type: OPEN_MODAL,
  payload: { data }
})

export const closeModal = () => ({
  type: CLOSE_MODAL,
  payload: { data: {} }
})
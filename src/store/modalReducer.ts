import { CLOSE_MODAL, OPEN_MODAL } from "./constants";
import { User } from "../interfaces";

interface State {
  isOpen: boolean
  data: Partial<Pick<User, 'company' | 'address'>>
}

const initialState: State = {
  isOpen: false,
  data: {}
}

export const modalReducer = (state = initialState, { type, payload }: { type: any, payload: any }): State => {
  switch (type) {
    case OPEN_MODAL:
      return {
        isOpen: true,
        data: payload.data
      }
    case CLOSE_MODAL:
      return {
        isOpen: false,
        data: payload.data
      }
    default:
      return state
  }
}
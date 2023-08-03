import { useCallback } from "react";
import { useAppSelector } from "./useAppSelector";
import { useAppDispatch } from "./useAppDispatch";
import { closeModal, openModal } from "../store";
import { User } from "../interfaces";

export default function useModal(): {
  isOpen: boolean,
  data: Partial<Pick<User, 'company' | 'address'>>,
  handleOpenCloseModal: (isOpen: boolean, data?: Partial<Pick<User, 'company' | 'address'>>) => void
} {
  const dispatch = useAppDispatch()

  const isOpen = useAppSelector(state => state.modal.isOpen)
  const data = useAppSelector(state => state.modal.data)

  const handleOpenCloseModal = useCallback((isOpen: boolean, data: Partial<Pick<User, 'company' | 'address'>> = {}) => {
    if(!isOpen) return  dispatch(closeModal())
    return  dispatch(openModal({ data }))
  }, [])

  return {
    isOpen,
    data,
    handleOpenCloseModal
  }
}
import React, { MouseEvent } from 'react';
import { useAppDispatch, useAppSelector, useFetchUsers } from "../hooks";
import UserItem from "./UserItem";
import { removeUser } from "../store";
import useModal from "../hooks/useModal";
import { User } from "../interfaces";

const UserList = () => {
  const { users } = useFetchUsers()
  const { isOpen, handleOpenCloseModal } = useModal()

  const dispatch = useAppDispatch()
  const usersSearchValue = useAppSelector(state => state.user.usersSearchValue)

  const handleRemove = (event: MouseEvent<HTMLElement>,removeId: number) => {
    event.stopPropagation()

    if (!removeId) return
    dispatch(removeUser({ id: removeId }))
  }

  const handleOpenModal = (event: MouseEvent<HTMLElement>,data: Partial<Pick<User, 'company' | 'address'>>) => {
    event.stopPropagation()

    handleOpenCloseModal(!isOpen, data)
  }

  return (
    <div className="list">
      {!!users.length && users.map((user) => (
        <UserItem
          key={user.id}
          usersSearchValue={usersSearchValue}
          onOpenModal={handleOpenModal}
          onRemove={handleRemove}
          {...user}
        />))}
    </div>
  );
};

export default UserList;
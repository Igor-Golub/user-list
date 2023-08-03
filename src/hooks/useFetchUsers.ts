import { useCallback, useEffect } from "react";
import { UsersAPI } from "../API";
import { setUsers } from "../store";
import { useAppDispatch } from "./useAppDispatch";
import { useAppSelector } from "./useAppSelector";
import { User } from "../interfaces";

export function useFetchUsers(): {
  fetchUsers: () => void;
  users: User[]
} {
  const dispatch = useAppDispatch()
  const users = useAppSelector(state => state.user.users)

  const fetchUsers = useCallback(() => {
    UsersAPI.fetchUsers().then((users) => {
      dispatch(setUsers({ users }))
    })
  }, [])

  return {
    users,
    fetchUsers
  }
}
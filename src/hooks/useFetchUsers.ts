import { useCallback, useState } from "react";
import { UsersAPI } from "../API";
import { setUsers } from "../store";
import { useAppDispatch } from "./useAppDispatch";
import { useAppSelector } from "./useAppSelector";
import { User } from "../interfaces";

export function useFetchUsers(): {
  fetchUsers: () => void;
  users: User[]
  loading: boolean
} {
  const [loading, setLoading] = useState<boolean>(false)
  const dispatch = useAppDispatch()
  const users = useAppSelector(state => state.user.users)

  const fetchUsers = useCallback(() => {
    setLoading(true)

    UsersAPI.fetchUsers()
      .then((users) => {
        dispatch(setUsers({ users }))
      })
      .catch((error) => console.error('Error fetch users', error))
      .finally(() => setLoading(false))
  }, [])

  return {
    loading,
    users,
    fetchUsers
  }
}
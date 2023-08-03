import React, { useState } from 'react';
import { useAppDispatch, useFetchUsers } from "../hooks";
import { setUserSearchValue } from "../store";

const Search = () => {
  const { fetchUsers } = useFetchUsers()

  const dispatch = useAppDispatch()
  const [searchValue, setSearchValue] = useState('')

  const handleChange = (value: string) => {
    setSearchValue(value)
    dispatch(setUserSearchValue({ value }))
  }

  const handleReset = () => {
    setSearchValue('')
    fetchUsers()
  }

  return (
    <div className="search">
      <input
        className="search_input"
        placeholder="Search..."
        value={searchValue}
        onChange={({ target: { value } }) => handleChange(value.trim())}
      />

      <button
        className="search_reset_btn"
        onClick={handleReset}
      >
        Reset
      </button>
    </div>
  );
};

export default Search;
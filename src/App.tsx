import React, { useEffect } from 'react';
import { Layout, Search, UserList } from "./components";
import { useFetchUsers } from "./hooks";
import useModal from "./hooks/useModal";
import Modal from "./components/Modal";

function App() {
  const { fetchUsers } = useFetchUsers()
  const { isOpen, data } = useModal()

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <>
      {isOpen && <Modal data={data} />}
      <Layout>
        <Search />
        <UserList />
      </Layout>
    </>
  );
}

export default App;

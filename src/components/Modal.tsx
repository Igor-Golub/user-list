import React, { useMemo } from 'react';
import { User } from "../interfaces";
import useModal from "../hooks/useModal";

type Props = { data: Partial<Pick<User, 'company' | 'address'>> }

const Modal = ({ data: { company, address } }: Props) => {
  const { isOpen, handleOpenCloseModal } = useModal()

  const { companyValue, addressValue } = useMemo(() => ({
    companyValue: `Address: ${address?.city}, ${address?.street}`,
    addressValue: `Company: ${company?.name}`
  }), [address, company])

  return (
    <div className="modal">
      <div className="modal_container">
        <button className="modal_close_btn" onClick={() => handleOpenCloseModal(!isOpen)}>&#10006;</button>

        <div className="modal_container_window">
          <p>{addressValue ?? 'No data'}</p>
          <p>{companyValue ?? 'No data'}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
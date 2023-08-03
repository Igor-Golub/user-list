import React, { MouseEvent } from 'react';
import { User } from "../interfaces";
import HighlightedText from "./HighlightedText";

type Props = {
  onRemove: (event: MouseEvent<HTMLElement>, id: number) => void;
  onOpenModal: (event: MouseEvent<HTMLElement>, data: Partial<Pick<User, 'company' | 'address'>>) => void
  usersSearchValue: string;
} & Pick<User, 'name' | 'username' | 'email' | 'id' | 'address' | 'company'>

const UserItem = ({ name, username, email, id, address, company, usersSearchValue, onRemove, onOpenModal }: Props) => {
  return (
    <div
      onClick={(event) => onOpenModal(event, { company, address })}
      className='list_item'
    >
      <div className="list_item_content">
        <button
          className="list_item_content_remove_btn"
          onClick={(event) => onRemove(event, id)}
        >
          &#10006;
        </button>

        <span>
          <HighlightedText value={`${name} ${username}`} highlight={usersSearchValue}/>
          <HighlightedText value={email} highlight={usersSearchValue}/>
        </span>
      </div>
    </div>
  );
};

export default UserItem;
import React from 'react';
import { BsBookmarkStarFill } from 'react-icons/bs';

function DropdownItem({ repo, saveRepositories }) {
  return (
    <li className='dropdown-item'>
      <div className='dropdown-info'>
        <img src={repo.owner?.avatar_url} alt={repo.name} />
        <a href={repo.html_url}>{repo.name}</a>
      </div>
      <button
        onClick={() => {
          saveRepositories(repo);
        }}>
        <BsBookmarkStarFill />
      </button>
    </li>
  );
}

export default DropdownItem;

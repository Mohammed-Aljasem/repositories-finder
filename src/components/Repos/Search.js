import React, { useState, useContext, useRef, useEffect } from 'react';
import GithubContext from '../../context/github/githubContext';
import { BsTrash } from 'react-icons/bs';
import DropdownSearch from '../DropDown/DropdownSearch';
export default function Search() {
  const githubContext = useContext(GithubContext);

  const [TextSearch, setTextSearch] = useState({ text: '' });
  const [showDropdown, setShowDropdown] = useState(false);

  const { repos, clearRepositories } = githubContext;

  const onChange = (e) => {
    setTextSearch({ [e.target.name]: e.target.value });
    if (TextSearch.text !== '') {
      githubContext.SearchRepositories(TextSearch.text);
      setShowDropdown(true);
    }
  };

  const searchInput = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchInput.current && !searchInput.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [searchInput]);

  return (
    <div className='search-container'>
      <div className='search-input'>
        <input
          type='text'
          name='text'
          value={TextSearch.text}
          onChange={onChange}
          onClick={() => {
            setShowDropdown(true);
          }}
          placeholder='Search Repositories...'
          id=''
        />
        {repos.length > 0 && (
          <button
            className='btn'
            onClick={() => {
              clearRepositories();
              setTextSearch({ text: '' });
            }}>
            <BsTrash />
          </button>
        )}
        <DropdownSearch showDropdown={showDropdown} searchInput={searchInput} />
      </div>
    </div>
  );
}

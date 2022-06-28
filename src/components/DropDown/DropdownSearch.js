import React, { useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import DropdownItem from './DropdownItem';

function DropdownSearch({ showDropdown, searchInput }) {
  const githubContext = useContext(GithubContext);
  const { repos, saveRepositories } = githubContext;

  return (
    showDropdown &&
    repos.length > 0 && (
      <div className='dropdown-search' ref={searchInput}>
        <ul className='dropdown-list'>
          {repos.length > 0 &&
            repos.map((repo, index) => (
              <DropdownItem
                repo={repo}
                saveRepositories={saveRepositories}
                key={'dropdown-item-' + index}
              />
            ))}
        </ul>
      </div>
    )
  );
}

export default DropdownSearch;

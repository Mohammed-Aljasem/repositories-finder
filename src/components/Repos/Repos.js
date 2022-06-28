import React, { useContext, useEffect } from 'react';
import RepoItem from './RepoItem';
import GithubContext from '../../context/github/githubContext';

export default function Repos() {
  const githubContext = useContext(GithubContext);
  useEffect(() => {
    githubContext.getSavedRepos();
  }, []);

  const repos = githubContext.savedRepositories;
  return (
    <div className='cards-container'>
      {repos &&
        Object.values(repos).map((repo, index) => (
          <RepoItem
            repo={repo}
            key={repo.id}
            deleteRepository={githubContext.deleteRepository}
          />
        ))}
    </div>
  );
}

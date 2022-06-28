import React from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import { GoRepoForked } from 'react-icons/go';
import { HiInformationCircle } from 'react-icons/hi';
import { MdDateRange, MdOutlineLocalPolice } from 'react-icons/md';
import { FiGitCommit } from 'react-icons/fi';
import { BiCodeAlt } from 'react-icons/bi';

export default function RepoItem({ repo, deleteRepository }) {
  const ageOfRepo =
    new Date().getUTCFullYear() - new Date(repo.created_at).getUTCFullYear();
  const updatedAt = new Date(repo.updated_at);
  const lastUpdate = `${updatedAt.getDay()}-${updatedAt.getMonth()}-${updatedAt.getFullYear()} `;
  return (
    <div className='card-box'>
      <div className='card-header'>
        <h3 className='title'>
          <a href={repo.html_url}>{repo.full_name}</a>
        </h3>
        <img src={repo.owner?.avatar_url} alt={repo.full_name} />
      </div>
      <div className='card-body'>
        <div className='card-item'>
          <span>
            <AiOutlineStar /> stars
          </span>
          <span>{repo.stargazers_count}</span>
        </div>
        <div className='card-item'>
          <span>
            <GoRepoForked /> Fork
          </span>
          <span> {repo.forks}</span>
        </div>
        <div className='card-item'>
          <span>
            <HiInformationCircle /> Open issues
          </span>
          <span> {repo.open_issues}</span>
        </div>

        <div className='card-item'>
          <span>
            <MdDateRange /> Age
          </span>
          <span>{ageOfRepo > 0 ? ageOfRepo + ' Years ago' : 'This year'}</span>
        </div>

        <div className='card-item'>
          <span>
            <FiGitCommit /> Last commit
          </span>
          <span> {lastUpdate}</span>
        </div>
        <div className='card-item'>
          <span>
            <MdOutlineLocalPolice /> License
          </span>
          <span> {repo.license?.spdx_id}</span>
        </div>
        <div className='card-item'>
          <span>
            <BiCodeAlt /> Language
          </span>
          <span> {repo.language}</span>
        </div>
      </div>
      <div className='card-footer'>
        <button
          onClick={() => deleteRepository(repo.id)}
          className='delete-btn'>
          Delete
        </button>
      </div>
    </div>
  );
}

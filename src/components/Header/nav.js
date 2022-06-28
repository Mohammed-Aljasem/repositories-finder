import { Link } from 'react-router-dom';
import { AiFillGithub } from 'react-icons/ai';

function Nav(props) {
  return (
    <div className='navbar '>
      <h3>
        <AiFillGithub />
        Repositories Finder
      </h3>
      <ul>
        <li>
          <Link to='/Github-Finder'> Home</Link>
        </li>
        <li>
          <Link to='/about'> About</Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;

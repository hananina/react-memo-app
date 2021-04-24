import { Link } from 'react-router-dom';

function MainNavigation() {
  return (
    <header>
      <div>React Memo App</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Memos</Link>
          </li>
          <li>
            <Link to="/">Pinned Memos</Link>
          </li>
          <li>
            <Link to="/new-memo">Add New Memo</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;

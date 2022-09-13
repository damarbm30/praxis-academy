import { Link } from "react-router-dom";

const Navbar = ({ search, setSearch }) => {
  return (
    <nav className="Nav">
      <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search">Search Posts</label>
        <input
          id="search"
          type="text"
          placeholder="Search Posts"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <ul>
        <li>
          <Link to="/" className="">
            Home
          </Link>
        </li>
        <li>
          <Link to="/post" className="">
            Post
          </Link>
        </li>
        <li>
          <Link to="/about" className="">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

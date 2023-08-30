import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="border-b border-gray-100">
      <nav className="container mx-auto py-10">
        <ul className="flex gap-10">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/refs">useRefs</Link>
          </li>
          <li>
            <Link to="/hoc">HOC</Link>
          </li>
          <li>
            <Link to="/controlled-components">Controlled components</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;

import { Link } from 'react-router-dom';

const NavBarComponent = () => {
 return (
 <nav>
       <ul>
          <li>
             <Link to="/">Home</Link>
          </li>
          <li>
             <Link to="/pga">PGA</Link>
          </li>
          <li>
             <Link to="/nba">NBA</Link>
          </li>
          <li>
             <Link to="/nhl">NHL</Link>
          </li>
       </ul>
 </nav>
 );
};

export default NavBarComponent;
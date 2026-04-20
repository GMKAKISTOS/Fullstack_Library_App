import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { SpinnerLoading } from "../Utils/SpinnerLoading";
import { useEffect, useState } from "react";

export const Navbar = () => {

    const [roles, setRoles] = useState<string[] | null>(null); 
    const [loading, setLoading] = useState(true); 
    const { isAuthenticated, loginWithRedirect, logout, getIdTokenClaims } = useAuth0();

    useEffect(() => {
      const fetchRoles = async () => {
          const claims = await getIdTokenClaims();
          const fetchedRoles = claims?.['https://manage.auth0.com/dashboard/us/dev-e3w5ib6e5s42p3e7/roles'] || [];
          setRoles(fetchedRoles);
          setLoading(false); 
      };

      fetchRoles();
  }, [isAuthenticated, getIdTokenClaims]);

  if (loading) {
    return <SpinnerLoading />
  }

  const handleLogout = () => {
    console.log("handleLogout");
    logout({ logoutParams: { returnTo: window.location.origin } })
  };

  const handleLogin =  () => {
     loginWithRedirect();
    window.location.assign("/");
  };

  console.log("isAuthenticated: ", isAuthenticated);

    return (
<nav className = 'navbar navbar-expand-lg navbar-dark main-color py-3'>
      <div className = 'container-fluid'>
        <span className = 'navbar-brand'>Love to read!</span>
        <button className = 'navbar-toggler' type = 'button'
        data-bs-toggle = 'collapse' data-bs-target = '#navbarNavDropdown'
        aria-controls = 'navbarNavDropdown' aria-expanded = 'false'
        aria-label = 'Toggle Navigation'
        >
        <span className = 'navbar-toggler-icon'></span>
        </button>
        <div className = 'collapse navbar-collapse' id = 'navbarNavDropdown'>
          <ul className = 'navbar-nav'>
            <li className = 'nav-item'>
             <NavLink className = 'nav-link' to = '/home'>Home</NavLink>
            </li>
            <li className = 'nav-item'>
              <NavLink className = 'nav-link' to = '/search'>Search books</NavLink>
            </li>
          </ul>
          <ul className = 'navbar-nav ms-auto'>
            <li className = 'nav-item m-1'>
              {!isAuthenticated ?
              <li className='nav-item m-1'>
                <button  className='btn btn-outline-light' onClick={handleLogin}>Sign in</button>
              </li>
              :
              <li>
                <button className='btn btn-outline-light' onClick={handleLogout}>Logout</button>
              </li>
            }
            </li>
          </ul>
      </div>
      </div>
    </nav>
    );
}
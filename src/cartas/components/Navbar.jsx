import { Link, NavLink } from 'react-router-dom';


export const Navbar = () => {


    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">

            <img src="logoNavbar.png" alt="" className="navbar-brand imgNavbar ms-3" />

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        className={ ({ isActive }) => `nav-link nav-item ${ isActive ? 'active' : ''} ms-3`}
                        to="/Monsters"
                    >
                        Monsters
                    </NavLink>

                    <NavLink 
                        className={ ({ isActive }) => `nav-link nav-item ${ isActive ? 'active' : ''} ms-3`}
                        to="/Spells"
                    >
                        Spells
                    </NavLink>

                    <NavLink 
                        className={ ({ isActive }) => `nav-link nav-item ${ isActive ? 'active' : ''} ms-3`}
                        to="/Traps"
                    >
                        Traps
                    </NavLink>

                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    
                    <button
                        className='nav-item nav-link btn'
                        
                    >
                        search
                    </button>
                </ul>
            </div>
        </nav>
    )
}
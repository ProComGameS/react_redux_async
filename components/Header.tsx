import { NavLink } from "react-router";

function Header() {

    return (

        <>
        <div>
            <li>
            <NavLink to={'/'}>Home</NavLink>
            </li>

            <li>
                <NavLink to={'/about'}>About</NavLink>
            </li>


            <li>
                <NavLink to={'/contacts'}>Contacts</NavLink>
            </li>


            <li>
                <NavLink to={'/auth'}>Auth</NavLink>
            </li>


        </div>
        </>
    )
}

export default Header;

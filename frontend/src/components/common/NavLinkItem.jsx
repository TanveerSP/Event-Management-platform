import { NavLink } from 'react-router-dom';

const NavLinkItem = ({name, path}) => {
  return (
    <li
    className='text-lg font-medium text-center'
    >
        <NavLink
         to={path}
        className={({isActive}) => 
        isActive ? ' text-purple-800 border-b-3 p-0.5 px-2 transition-all ease-in-out' : 'text-purple-700 hover:text-purple-900'
        }
        >
            {name}
        </NavLink>
    </li>
  )
}

export default NavLinkItem
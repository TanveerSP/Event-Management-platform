import { NavLink } from 'react-router-dom';

const NavLinkItem = ({name, path}) => {
  return (
    <li
    className='text-lg font-medium text-center'
    >
        <NavLink
         to={path}
        className={({isActive}) => 
        isActive ? 'bg-purple-700 text-white border-4 border-purple-800 p-2 px-3 transition-all duration-100 ease-in-out' : 'text-purple-700 hover:text-purple-900'
        }
        >
            {name}
        </NavLink>
    </li>
  )
}

export default NavLinkItem